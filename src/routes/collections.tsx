import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

import heroStore from "@/assets/photos/full/store/store-02.webp";
import imgShirts from "@/assets/photos/card/shirts/shirts-04.webp";
import imgTshirts from "@/assets/photos/card/tshirts/tshirts-09.webp";
import imgBlazers from "@/assets/photos/card/blazers/blazers-14.webp";
import imgJeans from "@/assets/photos/card/jeans/jeans-06.webp";
import imgFormalPants from "@/assets/photos/card/formal-pants/formal-pants-18.webp";
import imgCargoPants from "@/assets/photos/card/cargo-pants/cargo-pants-03.webp";
import imgHalfPants from "@/assets/photos/card/half-pants/half-pants-03.webp";
import imgTrackPants from "@/assets/photos/card/track-pants/track-pants-03.webp";
import imgInnerWear from "@/assets/photos/card/inner-wear/inner-wear-04.webp";
import imgWalletsBelts from "@/assets/photos/card/wallets-belts/wallets-belts-05.webp";
import imgAccessories from "@/assets/photos/card/accessories/accessories-08.webp";
import showcaseBlazerRoom from "@/assets/photos/card/store/store-04.webp";
import showcaseDenim from "@/assets/photos/card/jeans/jeans-01.webp";

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
    image: imgShirts,
    w: 900,
    h: 600,
  },
  {
    name: "T-Shirts",
    copy: "Combed cotton crews, polos and long-sleeve knits in seasonal tones.",
    image: imgTshirts,
    w: 900,
    h: 600,
  },
  {
    name: "Blazers",
    copy: "Half-canvas tailoring in wool, wool-blend and unstructured summer weights.",
    image: imgBlazers,
    w: 646,
    h: 900,
  },
  {
    name: "Jeans",
    copy: "Straight, slim and relaxed denim from raw indigo to stone-washed light.",
    image: imgJeans,
    w: 600,
    h: 900,
  },
  {
    name: "Formal Pants",
    copy: "Flat-front and single-pleat trousers with crease-hold finishing.",
    image: imgFormalPants,
    w: 600,
    h: 900,
  },
  {
    name: "Cargo Pants",
    copy: "Utility pockets, tapered legs and washed cotton for everyday wear.",
    image: imgCargoPants,
    w: 900,
    h: 600,
  },
  {
    name: "Half Pants",
    copy: "Chino shorts, printed shorts and drawstring styles for warm months.",
    image: imgHalfPants,
    w: 600,
    h: 900,
  },
  {
    name: "Track Pants",
    copy: "French terry and performance knits with clean, unbranded lines.",
    image: imgTrackPants,
    w: 600,
    h: 900,
  },
  {
    name: "Inner Wear",
    copy: "Breathable cotton vests, briefs, trunks and thermal layers.",
    image: imgInnerWear,
    w: 900,
    h: 600,
  },
  {
    name: "Wallets & Belts",
    copy: "Full-grain leather in tan, oxblood and black with brushed hardware.",
    image: imgWalletsBelts,
    w: 900,
    h: 704,
  },
  {
    name: "Accessories",
    copy: "Handkerchief sets, socks, ties and travel-ready leather goods.",
    image: imgAccessories,
    w: 600,
    h: 900,
  },
];

const showcases = [
  {
    eyebrow: "Showcase 01",
    title: "The Tailoring Room",
    copy: "A dedicated corner for blazers, three-piece suits and formal shirting. Measurements are taken standing, seated and mid-stride — the way you will actually wear the garment.",
    image: showcaseBlazerRoom,
    reverse: false,
  },
  {
    eyebrow: "Showcase 02",
    title: "Everyday & Weekend",
    copy: "Denim, knitwear, track and cargo — the rails students and young professionals visit most. Restocked weekly, sized generously, and always displayed by fit rather than by label.",
    image: showcaseDenim,
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
        image={heroStore}
        alt="Interior rails of the Ridhi Sidhi showroom"
        width={1600}
        height={1067}
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
                    width={item.w}
                    height={item.h}
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
              width={900}
              height={600}
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
