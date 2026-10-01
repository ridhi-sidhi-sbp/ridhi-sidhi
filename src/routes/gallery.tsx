import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

import heroStorefront from "@/assets/photos/full/storefront/storefront-01.webp";
import dimensions from "@/assets/photos/dimensions.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Ridhi Sidhi Showroom" },
      {
        name: "description",
        content:
          "Store interiors, the storefront, every product category and customer moments from the Ridhi Sidhi premium garment showroom — the full photo gallery.",
      },
      { property: "og:title", content: "Gallery — Inside the Ridhi Sidhi Showroom" },
      {
        property: "og:description",
        content:
          "A visual walk through our floor: interiors, storefront, every category and customer experience.",
      },
    ],
  }),
  component: Gallery,
});

const CATEGORY_LABELS: Record<string, string> = {
  shirts: "Shirts",
  tshirts: "T-Shirts",
  blazers: "Blazers",
  jeans: "Jeans",
  "formal-pants": "Formal Pants",
  "cargo-pants": "Cargo Pants",
  "half-pants": "Half Pants",
  "track-pants": "Track Pants",
  "inner-wear": "Inner Wear",
  "wallets-belts": "Wallets & Belts",
  accessories: "Accessories",
  store: "In Store",
  storefront: "Storefront",
  customers: "Customers",
  owner: "Owner",
};

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS);
const DIMENSIONS = dimensions as Record<string, number[]>;

const thumbModules = import.meta.glob<string>("@/assets/photos/thumb/**/*.webp", {
  eager: true,
  import: "default",
});
const fullModules = import.meta.glob<string>("@/assets/photos/full/**/*.webp", {
  import: "default",
});

type Shot = {
  id: string;
  thumb: string;
  fullPath: string;
  category: string;
  alt: string;
  width: number;
  height: number;
};

function slugFromPath(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 2] ?? "store";
}

const shots: Shot[] = Object.entries(thumbModules)
  .map(([path, thumb]) => {
    const category = slugFromPath(path);
    const fileName = path.split("/").pop() ?? "";
    const fullPath = path.replace("/thumb/", "/full/");
    const label = CATEGORY_LABELS[category] ?? category;
    const dims = DIMENSIONS[path];
    const width = dims?.[0] ?? 500;
    const height = dims?.[1] ?? 333;
    return {
      id: fileName,
      thumb,
      fullPath,
      category,
      alt: `${label} — ${fileName.replace(".webp", "")}`,
      width,
      height,
    };
  })
  .sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category);
    const bi = CATEGORY_ORDER.indexOf(b.category);
    if (ai !== bi) return ai - bi;
    return a.id.localeCompare(b.id, undefined, { numeric: true });
  });

const groups = ["All", ...CATEGORY_ORDER.map((c) => CATEGORY_LABELS[c] ?? c)];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const [fullSrc, setFullSrc] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? shots : shots.filter((s) => CATEGORY_LABELS[s.category] === filter)),
    [filter],
  );
  const active = index === null ? undefined : visible[index];

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((cur) => (cur === null ? cur : (cur + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (!active) {
      setFullSrc(null);
      return;
    }
    let cancelled = false;
    const loader = fullModules[active.fullPath];
    if (!loader) {
      setFullSrc(active.thumb);
      return;
    }
    loader().then((src) => {
      if (!cancelled) setFullSrc(src);
    });
    return () => {
      cancelled = true;
    };
  }, [active]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="The floor, frame by frame"
        description="Every category, the storefront, the interiors and the customer moments — the full photo archive."
        image={heroStorefront}
        alt="The Ridhi Sidhi storefront"
        width={1600}
        height={1067}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading eyebrow="Browse" title="Look around before you walk in" align="center" />

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {groups.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => {
                    setFilter(g);
                    setIndex(null);
                  }}
                  className={`border px-6 py-3 text-[0.625rem] tracking-[0.24em] uppercase transition-colors ${
                    filter === g
                      ? "border-ink bg-ink text-bone"
                      : "border-border text-muted-foreground hover:border-ink hover:text-foreground"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {visible.map((shot, i) => (
              <Reveal
                key={shot.category + shot.id}
                delay={(i % 9) * 0.02}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full cursor-zoom-in overflow-hidden media-zoom"
                >
                  <img
                    src={shot.thumb}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                  <span className="absolute bottom-0 left-0 p-5 text-left text-[0.625rem] tracking-[0.24em] text-bone uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {CATEGORY_LABELS[shot.category] ?? shot.category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && index !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/96 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-6 right-6 text-bone/70 transition-colors hover:text-bone"
            >
              <X className="size-7" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 text-bone/60 transition-colors hover:text-bone sm:left-8"
            >
              <ChevronLeft className="size-9" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 text-bone/60 transition-colors hover:text-bone sm:right-8"
            >
              <ChevronRight className="size-9" />
            </button>

            <motion.figure
              key={active.category + active.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fullSrc ?? active.thumb}
                alt={active.alt}
                className="max-h-[78vh] w-full object-contain"
              />
              <figcaption className="mt-5 text-center text-[0.6875rem] tracking-[0.2em] text-bone/55 uppercase">
                {CATEGORY_LABELS[active.category] ?? active.category} — {index + 1} /{" "}
                {visible.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <WhatsAppCta />
    </PageShell>
  );
}
