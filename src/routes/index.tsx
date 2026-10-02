import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, Tag, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StoreMap } from "@/components/site/StoreMap";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { site } from "@/lib/site";

import heroStore from "@/assets/photos/full/store/store-01.webp";
import catShirts from "@/assets/photos/card/shirts/shirts-09.webp";
import catTshirts from "@/assets/photos/card/tshirts/tshirts-01.webp";
import catBlazers from "@/assets/photos/card/blazers/blazers-01.webp";
import catJeans from "@/assets/photos/card/jeans/jeans-04.webp";
import catFormalPants from "@/assets/photos/card/formal-pants/formal-pants-01.webp";
import catWalletsBelts from "@/assets/photos/card/wallets-belts/wallets-belts-01.webp";
import brandsWall from "@/assets/photos/card/store/store-02.webp";
import experienceCustomers from "@/assets/photos/card/customers/customers-02.webp";
import galleryStore from "@/assets/photos/card/store/store-01.webp";
import galleryJeans from "@/assets/photos/card/jeans/jeans-02.webp";
import galleryAccessories from "@/assets/photos/card/accessories/accessories-08.webp";
import galleryCustomers from "@/assets/photos/card/customers/customers-13.webp";
import galleryTrialRoom from "@/assets/photos/card/store/store-02.webp";
import floorCustomer1 from "@/assets/photos/card/customers/customers-05.webp";
import floorCustomer2 from "@/assets/photos/card/customers/customers-08.webp";
import floorCustomer3 from "@/assets/photos/card/customers/customers-11.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridhi Sidhi — Fashion That Defines Your Presence" },
      {
        name: "description",
        content:
          "A premium garment showroom with curated menswear, casual and formal collections. Open 10 AM – 9 PM, every day.",
      },
      { property: "og:title", content: "Ridhi Sidhi — Fashion That Defines Your Presence" },
      {
        property: "og:description",
        content:
          "Curated menswear, casual and formal collections in one premium showroom. Visit us in store.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Shirts", note: "Cotton, linen & easy-iron twills", image: catShirts, w: 900, h: 822 },
  { name: "T-Shirts", note: "Polos, crews & everyday knits", image: catTshirts, w: 900, h: 600 },
  {
    name: "Blazers",
    note: "Half-canvas tailoring, ready to wear",
    image: catBlazers,
    w: 900,
    h: 600,
  },
  { name: "Jeans", note: "Straight, slim & relaxed denim", image: catJeans, w: 900, h: 822 },
  {
    name: "Formal Pants",
    note: "Flat-front trousers, crease-hold finish",
    image: catFormalPants,
    w: 600,
    h: 900,
  },
  {
    name: "Wallets & Belts",
    note: "Full-grain leather essentials",
    image: catWalletsBelts,
    w: 900,
    h: 600,
  },
];

const pillars = [
  {
    icon: Award,
    title: "Premium Quality",
    copy: "Every rail is hand-checked for fabric weight, stitch line and finish before it reaches the floor.",
  },
  {
    icon: Tag,
    title: "Multi-Brand Floor",
    copy: "Peter England, Killer, Crimsoune Club and Jockey, stocked together under one roof.",
  },
  {
    icon: Sparkles,
    title: "Latest Collections",
    copy: "New arrivals land every fortnight, with a dedicated festive drop each season.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First Service",
    copy: "Unhurried fittings, honest advice and in-house alterations finished within 48 hours.",
  },
];

const floorMoments = [
  { src: floorCustomer1, alt: "A customer being shown fabric at the counter" },
  { src: floorCustomer2, alt: "A customer trying on a jacket with staff assistance" },
  { src: floorCustomer3, alt: "A customer at the fitting mirror with a staff member" },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-dvh flex-col overflow-hidden bg-ink pt-20 sm:min-h-screen sm:flex-row sm:items-center sm:pt-0">
        <motion.video
          src="/video/hero.mp4"
          poster={heroStore}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-video w-full object-cover sm:absolute sm:inset-0 sm:aspect-auto sm:h-full sm:opacity-60"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink via-ink/55 to-ink/25 sm:block" />

        <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 py-10 sm:flex-none sm:py-0 sm:pt-32 sm:pb-24 lg:px-12">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {site.tagline}
          </motion.span>

          <motion.h1
            className="mt-7 max-w-4xl text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Fashion That Defines
            <br />
            Your Presence
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-bone/70"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Discover premium collections for every occasion.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/collections"
              className="group flex items-center justify-center gap-3 bg-bone px-10 py-5 text-[0.6875rem] tracking-[0.26em] text-ink uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore Collections
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center border border-bone/45 px-10 py-5 text-[0.6875rem] tracking-[0.26em] text-bone uppercase transition-colors hover:bg-bone hover:text-ink"
            >
              Visit Store
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-6 bottom-10 hidden text-[0.625rem] tracking-[0.3em] text-bone/45 uppercase lg:right-12 lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {site.hours}
        </motion.div>
      </section>

      {/* Featured categories */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="The Floor"
            title="Six categories, one visit"
            description="Walk the showroom from tailored blazers to weekend denim — see the full catalogue of eleven categories on the Collections page."
          />

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.06}>
                <Link
                  to="/collections"
                  className="group relative block aspect-[3/4] overflow-hidden bg-background media-zoom"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    width={cat.w}
                    height={cat.h}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent transition-opacity duration-700 group-hover:from-ink/90" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-2xl text-bone">{cat.name}</h3>
                    <p className="mt-2 text-sm text-bone/65">{cat.note}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.625rem] tracking-[0.26em] text-gold-soft uppercase opacity-0 transition-all duration-500 group-hover:opacity-100">
                      View in store <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Why Ridhi Sidhi"
            title="A showroom built on patience, not pressure"
            align="center"
          />
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full bg-bone p-10 transition-colors duration-500 hover:bg-background">
                  <p.icon className="size-7 text-accent" strokeWidth={1.2} />
                  <h3 className="mt-8 text-xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands we stock */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <div>
            <SectionHeading
              eyebrow="Brands We Stock"
              title="A floor built around names you trust"
              description="We're a multi-brand stockist, not a single label's showroom. Peter England, Killer, Crimsoune Club and Jockey all share the same rails."
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 grid grid-cols-2 gap-6">
                {["Peter England", "Killer", "Crimsoune Club", "Jockey"].map((brand) => (
                  <li
                    key={brand}
                    className="border-t border-border pt-4 text-sm tracking-[0.06em] text-foreground"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <RevealImage
            src={brandsWall}
            alt="The Peter England brand wall inside the showroom"
            className="aspect-[4/5]"
            width={900}
            height={750}
          />
        </div>
      </section>

      {/* Store experience */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <RevealImage
            src={experienceCustomers}
            alt="A staff member helping a customer choose a blazer"
            width={900}
            height={600}
            className="aspect-[4/5]"
          />
          <div>
            <SectionHeading
              eyebrow="Store Experience"
              title="One visit, no rush"
              description="Our floor is designed the way a fitting should feel — wide aisles, warm light, full-length mirrors that tell the truth, and a stylist who waits while you decide."
            />
            <Reveal delay={0.15}>
              <dl className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  ["4", "Brands stocked"],
                  ["48h", "In-house alterations"],
                  ["11", "Curated categories"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-4xl text-accent">{value}</dt>
                    <dd className="mt-2 text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* On the floor */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="On The Floor"
            title="Real fittings, real moments"
            align="center"
            tone="light"
          />
          <div className="mt-16 grid gap-px bg-bone/10 lg:grid-cols-3">
            {floorMoments.map((img, i) => (
              <Reveal key={img.alt} delay={i * 0.1}>
                <div className="aspect-[4/5] media-zoom">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Gallery"
              title="Inside the showroom"
              description="A look at the racks, the windows and the people who make the floor what it is."
            />
            <Reveal delay={0.1}>
              <Link
                to="/gallery"
                className="link-underline text-[0.6875rem] tracking-[0.26em] uppercase"
              >
                View full gallery
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {[
              { src: galleryStore, alt: "The Peter England brand wall", h: 600, w: 900 },
              {
                src: galleryJeans,
                alt: "Denim folded and racked in the showroom",
                h: 600,
                w: 900,
              },
              {
                src: galleryAccessories,
                alt: "Sock and tie display at the counter",
                h: 900,
                w: 600,
              },
              { src: galleryCustomers, alt: "A customer at the fitting mirror", h: 600, w: 900 },
              { src: galleryTrialRoom, alt: "The trial room entrance", h: 750, w: 900 },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <div className="media-zoom">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit our store */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
          <div>
            <SectionHeading
              eyebrow="Visit Our Store"
              title="Come see the fabric in daylight"
              description="Photographs only go so far. Walk in, hold the cloth, try the fit — our team will take it from there."
            />
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-6 text-sm leading-relaxed">
                <div>
                  <p className="eyebrow">Address</p>
                  <p className="mt-3 text-foreground">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Store Hours</p>
                  <p className="mt-3 text-foreground">{site.hours}</p>
                </div>
                <div>
                  <p className="eyebrow">Contact</p>
                  <p className="mt-3 text-foreground">{site.phone}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <StoreMap />
          </Reveal>
        </div>
      </section>

      <WhatsAppCta />
    </PageShell>
  );
}
