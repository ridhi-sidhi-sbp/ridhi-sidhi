import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageShell } from "@/components/site/PageShell";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProductCategory, productCategories } from "@/lib/catalogue";
import { shotsFor, shotsForAll, type Shot } from "@/lib/photos";

import headerStore from "@/assets/photos/full/store/store-01.webp";

export const Route = createFileRoute("/collections")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search["category"] === "string" ? { category: search["category"] } : {},
  head: () => ({
    meta: [
      { title: "Collections — Ridhi Sidhi Premium Garment Showroom" },
      {
        name: "description",
        content:
          "Shirts, T-shirts, blazers, winter jackets, jeans, formal, cargo, half and track pants, inner wear, wallets, belts and accessories. Browse every category on the Ridhi Sidhi showroom floor.",
      },
      { property: "og:title", content: "Collections — Ridhi Sidhi" },
      {
        property: "og:description",
        content:
          "Twelve menswear categories, curated by hand. Pick a category to see it on its own.",
      },
    ],
  }),
  component: Collections,
});

const allShots = shotsForAll(productCategories.map((c) => c.slug));

const filters = [
  { slug: undefined, name: "All" },
  ...productCategories.map((c) => ({ slug: c.slug, name: c.name })),
];

function Collections() {
  const { category } = Route.useSearch();
  const selected = getProductCategory(category);
  const groups = selected ? [selected] : productCategories;
  const visible: Shot[] = selected ? shotsFor(selected.slug) : allShots;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-ink pt-32 pb-14 lg:pt-40 lg:pb-20">
        <img
          src={headerStore}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.625rem] tracking-[0.24em] text-bone/50 uppercase"
          >
            <Link to="/" className="transition-colors hover:text-bone">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            {selected ? (
              <>
                <Link to="/collections" className="transition-colors hover:text-bone">
                  Collections
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-gold-soft">{selected.name}</span>
              </>
            ) : (
              <span className="text-gold-soft">Collections</span>
            )}
          </nav>

          <h1 className="mt-6 text-5xl leading-[1.04] text-bone sm:text-6xl lg:text-7xl">
            {selected ? selected.name : "All collections"}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/70">
            {selected
              ? selected.copy
              : "Twelve categories, curated by hand. Pick one to see it on its own, or browse the whole floor below."}
          </p>
          <WhatsAppButton
            variant="solid"
            message={
              selected
                ? `Hello Ridhi Sidhi, I'd like to see your ${selected.name} range.`
                : "Hello Ridhi Sidhi, I'd like to know more about your collections."
            }
            className="mt-8"
          >
            {selected ? `Ask about ${selected.name}` : "Ask our floor team"}
          </WhatsAppButton>
          <p className="mt-6 text-[0.6875rem] tracking-[0.24em] text-gold-soft uppercase">
            {visible.length} photographs
          </p>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <nav
          aria-label="Filter by category"
          className="mx-auto max-w-[1400px] overflow-x-auto px-6 py-4 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex w-max gap-2 lg:w-auto lg:flex-wrap">
            {filters.map((f) => {
              const isActive = (selected?.slug ?? undefined) === f.slug;
              return (
                <li key={f.name}>
                  <Link
                    to="/collections"
                    search={f.slug ? { category: f.slug } : {}}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex items-center gap-2 border px-4 py-2.5 text-[0.625rem] tracking-[0.2em] whitespace-nowrap uppercase transition-colors ${
                      isActive
                        ? "border-ink bg-ink text-bone"
                        : "border-border text-muted-foreground hover:border-ink hover:text-foreground"
                    }`}
                  >
                    {f.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] space-y-24 px-6 py-16 lg:px-12 lg:py-24">
          {groups.map((cat) => {
            const shots = shotsFor(cat.slug);
            return (
              <div key={cat.slug}>
                {selected ? null : (
                  <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl">{cat.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{cat.note}</p>
                    </div>
                    <Link
                      to="/collections"
                      search={{ category: cat.slug }}
                      className="link-underline text-[0.6875rem] tracking-[0.24em] uppercase"
                    >
                      View all {cat.name}
                    </Link>
                  </div>
                )}

                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
                  {shots.map((shot, i) => (
                    <Reveal key={shot.key} delay={(i % 6) * 0.05} className="break-inside-avoid">
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(visible.indexOf(shot))}
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
                        <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                        <span className="absolute bottom-0 left-0 p-5 text-left text-[0.625rem] tracking-[0.24em] text-bone uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          {shot.label}
                        </span>
                      </button>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Lightbox shots={visible} index={lightboxIndex} onIndexChange={setLightboxIndex} />

      <WhatsAppCta />
    </PageShell>
  );
}
