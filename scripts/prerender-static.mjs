// Prerenders every route to static HTML in dist/ by running the real SSR
// server once at build time and saving what it renders. TanStack Start's
// own built-in prerender step (tanstackStart.prerender.enabled) doesn't
// work with this project's toolchain yet — Nitro's "node" preset doesn't
// export a plain fetch() the prerenderer can call in-process, and the
// "standard"/"static" presets hit unrelated upstream build bugs. Calling
// the server over real HTTP sidesteps all of that.
import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const PORT = 4174;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const ROUTES = ["/", "/about", "/collections", "/gallery", "/contact"];
const SERVER_ENTRY = path.resolve(".output/server/index.mjs");
const DIST_DIR = path.resolve("dist");

function outputPathFor(route) {
  if (route === "/") return path.join(DIST_DIR, "index.html");
  return path.join(DIST_DIR, route.slice(1), "index.html");
}

async function waitForServer(timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(ORIGIN + "/");
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Server at ${ORIGIN} did not become ready in time`);
}

async function main() {
  const server = spawn(process.execPath, [SERVER_ENTRY], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let serverOutput = "";
  server.stdout.on("data", (d) => (serverOutput += d));
  server.stderr.on("data", (d) => (serverOutput += d));

  try {
    await waitForServer();

    for (const route of ROUTES) {
      const res = await fetch(ORIGIN + route);
      if (!res.ok) {
        throw new Error(`Fetching ${route} returned HTTP ${res.status}`);
      }
      const html = await res.text();
      if (!html.includes("<!DOCTYPE html>") || !html.includes("<title>")) {
        throw new Error(`Rendered output for ${route} doesn't look like a real page`);
      }
      const outPath = outputPathFor(route);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");
      console.log(`Prerendered ${route} -> ${path.relative(process.cwd(), outPath)}`);
    }
  } catch (err) {
    console.error(serverOutput);
    throw err;
  } finally {
    server.kill();
  }

  // The SSR server bundle isn't needed once every route is prerendered to
  // static HTML — Antideploy serves dist/ as a plain static site.
  await rm(path.resolve(".output"), { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
