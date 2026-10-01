import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

import storeDetail from "@/assets/store-detail.jpg";
import catMen from "@/assets/cat-men.jpg";
import catCasual from "@/assets/cat-casual.jpg";
import catFormal from "@/assets/cat-formal.jpg";
import galleryDenim from "@/assets/gallery-denim.jpg";
import accessories from "@/assets/accessories.jpg";
import storeExperience from "@/assets/store-experience.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Ridhi Sidhi Premium Garment Showroom" },
      {
        name: "description",
        content:
          "Shirts, blazers, denim, formal and cargo trousers, inner wear, wallets, belts and accessories — all on the Ridhi Sidhi showroom floor.",
      },
      { property: "og:title", content: "Collections — Ridhi Sidhi" },
      {
        property: "og:description",
        content:
          "Curated categories across menswear, casual and formal wear, displayed across our showroom floor.",
      },
    ],
  }),
  component: Collections,
});

const catalogue = [
  {
    name: "Shirts",
    copy: "Egyptian cotton, linen blends and easy-iron twills in classic and slim fits.",
    image: catFormal,
  },
  {
    name: "T-Shirts",
    copy: "Combed cotton crews, polos and long-sleeve knits in seasonal tones.",
    image: catCasual,
  },
  {
    name: "Blazers",
    copy: "Half-canvas tailoring in wool, wool-blend and unstructured summer weights.",
    image: catMen,
  },
  {
    name: "Jeans",
    copy: "Straight, slim and relaxed denim from raw indigo to stone-washed light.",
    image: galleryDenim,
  },
  {
    name: "Formal Pants",
    copy: "Flat-front and single-pleat trousers with crease-hold finishing.",
    image: catFormal,
  },
  {
    name: "Cargo Pants",
    copy: "Utility pockets, tapered legs and washed cotton for everyday wear.",
    image: catCasual,
  },
  {
    name: "Half Pants",
    copy: "Chino shorts, denim shorts and drawstring styles for warm months.",
    image: catCasual,
  },
  {
    name: "Track Pants",
    copy: "French terry and performance knits with clean, unbranded lines.",
    image: catCasual,
  },
  {
    name: "Inner Wear",
    copy: "Breathable cotton vests, briefs, trunks and thermal layers.",
    image: storeDetail,
  },
  {
    name: "Wallets & Belts",
    copy: "Full-grain leather in tan, oxblood and black with brushed hardware.",
    image: accessories,
  },
  {
    name: "Accessories",
    copy: "Ties, pocket squares, cufflinks, socks and travel-ready leather goods.",
    image: accessories,
  },
];

const showcases = [
  {
    eyebrow: "Showcase 01",
    title: "The Tailoring Room",
    copy: "A dedicated corner for blazers, three-piece suits and formal shirting, with a master tailor on the floor from noon. Measurements are taken standing, seated and mid-stride — the way you will actually wear the garment.",
    image: catMen,
    reverse: false,
  },
  {
    eyebrow: "Showcase 02",
    title: "Everyday & Weekend",
    copy: "Denim, knitwear, track and cargo — the rails students and young professionals visit most. Restocked weekly, sized generously, and always displayed by fit rather than by label.",
    image: catCasual,
    reverse: false,
  },
];

function Collections() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Collections"
        title="Eleven categories, curated by hand"
        description="No carts, no checkout. Just an honest look at what is on the floor this season — come in and try what catches your eye."
        image={storeExperience}
        alt="Interior rails of the Ridhi Sidhi showroom"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="The Catalogue"
            title="What you'll find on the rails"
            description="Each category is merchandised by fit and fabric so you can compare like with like, without a price tag getting in the way of the decision."
          />

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {catalogue.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 0.07}>
                <article className="group relative aspect-[4/5] overflow-hidden bg-background media-zoom">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-2xl text-bone">{item.name}</h3>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-bone/70 opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100">
                      {item.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {showcases.map((s, i) => (
        <section key={s.title} className={i % 2 === 0 ? "bg-bone" : "bg-background"}>
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
            <RevealImage
              src={s.image}
              alt={s.title}
              className={`aspect-[4/5] ${s.reverse ? "lg:order-2" : ""}`}
            />
            <div>
              <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.copy} />
              <Reveal delay={0.15}>
                <Link
                  to="/contact"
                  className="group mt-10 inline-flex items-center gap-3 border border-ink px-8 py-4 text-[0.6875rem] tracking-[0.24em] uppercase transition-colors hover:bg-ink hover:text-bone"
                >
                  Plan a visit
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <WhatsAppCta />
    </PageShell>
  );
}
