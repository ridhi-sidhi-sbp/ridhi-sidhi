import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

import heroShowroom from "@/assets/hero-showroom.jpg";
import storeExterior from "@/assets/store-exterior.jpg";
import storeExperience from "@/assets/store-experience.jpg";
import storeDetail from "@/assets/store-detail.jpg";
import galleryDenim from "@/assets/gallery-denim.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import accessories from "@/assets/accessories.jpg";
import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catFormal from "@/assets/cat-formal.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Ridhi Sidhi Showroom" },
      {
        name: "description",
        content:
          "Store interiors, the evening storefront, product displays and customer moments from the Ridhi Sidhi premium garment showroom.",
      },
      { property: "og:title", content: "Gallery — Inside the Ridhi Sidhi Showroom" },
      {
        property: "og:description",
        content:
          "A visual walk through our floors: interiors, exteriors, product displays and customer experience.",
      },
    ],
  }),
  component: Gallery,
});

type Shot = { src: string; alt: string; group: string };

const shots: Shot[] = [
  {
    src: heroShowroom,
    alt: "Main showroom floor with tailored menswear displays",
    group: "Store Interior",
  },
  {
    src: storeDetail,
    alt: "Folded shirting on illuminated timber shelving",
    group: "Store Interior",
  },
  { src: galleryDenim, alt: "The denim wall, arranged by wash and fit", group: "Store Interior" },
  { src: storeExterior, alt: "The showroom facade at dusk", group: "Store Exterior" },
  { src: catWedding, alt: "Wedding collection styled on the mezzanine", group: "Product Showcase" },
  { src: catMen, alt: "Charcoal blazer from the tailoring room", group: "Product Showcase" },
  { src: catWomen, alt: "Occasion wear from the womenswear floor", group: "Product Showcase" },
  { src: accessories, alt: "Leather wallets, belts and cufflinks", group: "Product Showcase" },
  { src: catFormal, alt: "Formal shirting and trousers display", group: "Product Showcase" },
  {
    src: storeExperience,
    alt: "A stylist adjusting a jacket at the fitting mirror",
    group: "Customer Experience",
  },
  { src: galleryFamily, alt: "A family choosing knitwear together", group: "Customer Experience" },
  { src: catKids, alt: "Kids wear styling on the ground floor", group: "Customer Experience" },
];

const groups = [
  "All",
  "Store Interior",
  "Store Exterior",
  "Product Showcase",
  "Customer Experience",
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const visible = filter === "All" ? shots : shots.filter((s) => s.group === filter);
  const active = index === null ? undefined : visible[index];

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((cur) => (cur === null ? cur : (cur + dir + visible.length) % visible.length)),
    [visible.length],
  );

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
        description="Interiors, the evening storefront, product displays and the quiet moments between a fitting and a decision."
        image={storeExterior}
        alt="The Ridhi Sidhi storefront at dusk"
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
              <Reveal key={shot.alt} delay={(i % 3) * 0.06} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full cursor-zoom-in overflow-hidden media-zoom"
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                  <span className="absolute bottom-0 left-0 p-5 text-left text-[0.625rem] tracking-[0.24em] text-bone uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {shot.group}
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
              key={active.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[78vh] w-full object-contain"
              />
              <figcaption className="mt-5 text-center text-[0.6875rem] tracking-[0.2em] text-bone/55 uppercase">
                {active.group} — {index + 1} / {visible.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <WhatsAppCta />
    </PageShell>
  );
}
