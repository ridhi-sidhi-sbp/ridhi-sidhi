import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[0.22em] uppercase">{site.name}</p>
            <span className="rule-gold mt-5" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/60">
              A premium garment showroom dressing families, professionals and celebrations since{" "}
              {site.established}.
            </p>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <p className="mt-6 text-sm leading-relaxed text-bone/70">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <p className="mt-4 text-sm text-bone/70">{site.hours}</p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm text-bone/70">
              <a href={site.phoneHref} className="block link-underline w-fit">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block link-underline w-fit">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-bone/15 pt-8 text-[0.6875rem] tracking-[0.2em] uppercase text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
