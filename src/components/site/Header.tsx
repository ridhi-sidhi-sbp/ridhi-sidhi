import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex flex-col leading-none">
          <span
            className={`font-display text-xl tracking-[0.22em] uppercase transition-colors ${
              scrolled || open ? "text-foreground" : "text-bone"
            }`}
          >
            {site.name}
          </span>
          <span
            className={`mt-1 text-[0.5625rem] tracking-[0.42em] uppercase transition-colors ${
              scrolled || open ? "text-muted-foreground" : "text-bone/60"
            }`}
          >
            Since {site.established}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`link-underline text-[0.6875rem] tracking-[0.24em] uppercase transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-bone/80 hover:text-bone"
              }`}
              activeProps={{
                className: scrolled ? "text-foreground" : "text-bone",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className={`border px-6 py-3 text-[0.6875rem] tracking-[0.24em] uppercase transition-colors ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-bone"
                : "border-bone/50 text-bone hover:bg-bone hover:text-ink"
            }`}
          >
            Call Store
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled || open ? "text-foreground" : "text-bone"}`}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col px-6 py-6">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-2xl text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-6 bg-ink px-6 py-4 text-center text-[0.6875rem] tracking-[0.24em] text-bone uppercase"
              >
                Call {site.phone}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
