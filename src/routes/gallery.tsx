import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { showroomLabels } from "@/lib/catalogue";
import { shotsForAll } from "@/lib/photos";

import heroStorefront from "@/assets/photos/full/storefront/storefront-01.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Ridhi Sidhi Showroom" },
      {
        name: "description",
        content:
          "The storefront, store interiors and customer moments from the Ridhi Sidhi premium garment showroom. To browse products, see our collections.",
      },
      { property: "og:title", content: "Gallery — Inside the Ridhi Sidhi Showroom" },
      {
        property: "og:description",
        content: "A visual walk through our storefront, interiors and the people who shop with us.",
      },
    ],
  }),
  component: Gallery,
});

const SHOWROOM_FOLDERS = Object.keys(showroomLabels);
const shots = shotsForAll(SHOWROOM_FOLDERS);

const filters = [
  { slug: undefined, name: "All" },
  ...SHOWROOM_FOLDERS.map((slug) => ({ slug, name: showroomLabels[slug] ?? slug })),
];

function Gallery() {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = filter ? shots.filter((s) => s.category === filter) : shots;

  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="Inside the showroom"
        description="The storefront, the interiors and the customers who shop with us. Looking for products? Browse our collections."
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
              {filters.map((f) => {
                const isActive = filter === f.slug;
                return (
                  <button
                    key={f.name}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      setFilter(f.slug);
                      setLightboxIndex(null);
                    }}
                    className={`border px-6 py-3 text-[0.625rem] tracking-[0.24em] uppercase transition-colors ${
                      isActive
                        ? "border-ink bg-ink text-bone"
                        : "border-border text-muted-foreground hover:border-ink hover:text-foreground"
                    }`}
                  >
                    {f.name}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {visible.map((shot, i) => (
              <Reveal key={shot.key} delay={(i % 9) * 0.02} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
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
                    {shot.label}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20 text-center">
              <Link
                to="/collections"
                className="link-underline text-[0.6875rem] tracking-[0.26em] uppercase"
              >
                Browse the collections
              </Link>
              <div className="mt-10">
                <WhatsAppButton variant="outline" tone="light">
                  Ask about a visit
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Lightbox shots={visible} index={lightboxIndex} onIndexChange={setLightboxIndex} />

      <WhatsAppCta />
    </PageShell>
  );
}
