import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Award, Tag, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StoreMap } from "@/components/site/StoreMap";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { productCategories } from "@/lib/catalogue";
import { site } from "@/lib/site";

import heroStore from "@/assets/photos/full/store/store-01.webp";
import ownerPortrait from "@/assets/photos/full/owner/owner-01.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridhi Sidhi — Menswear by Category, Sambalpur" },
      {
        name: "description",
        content:
          "Shop menswear by category at Ridhi Sidhi, a multi-brand premium garment showroom in Sambalpur, Odisha. Shirts, blazers, denim, trousers, inner wear and leather. Open 10 AM – 9 PM, every day.",
      },
      { property: "og:title", content: "Ridhi Sidhi — Menswear by Category, Sambalpur" },
      {
        property: "og:description",
        content:
          "Eleven menswear categories under one roof. Browse the collections, then visit us in store.",
      },
    ],
  }),
  component: Home,
});

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

const stats = [
  { value: String(productCategories.length), label: "Categories" },
  { value: "4", label: "Brands" },
  { value: "48h", label: "Alterations" },
];

function Hero() {
  return (
    <section className="bg-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-6">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {site.tagline} · Sambalpur
          </motion.span>

          <motion.h1
            className="mt-6 text-5xl leading-[1.04] text-bone sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Menswear, sorted
            <br />
            <span className="text-gold-soft">by category.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-md text-base leading-relaxed text-bone/70"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Shirts to leather, from four trusted brands. Choose a category to see what is on our
            rails, then come in and try the fit.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#categories"
              className="group flex items-center justify-center gap-3 bg-bone px-9 py-5 text-[0.6875rem] tracking-[0.26em] text-ink uppercase transition-colors hover:bg-gold-soft"
            >
              Shop by category
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <WhatsAppButton variant="outline" tone="dark" className="px-9 py-5">
              Ask on WhatsApp
            </WhatsAppButton>
          </motion.div>

          <motion.dl
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-bone/15 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-bone sm:text-4xl">{s.value}</dt>
                <dd className="mt-2 text-[0.625rem] tracking-[0.22em] text-bone/50 uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative lg:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -top-4 -right-4 -bottom-4 -left-4 hidden border border-gold/40 sm:block" />
          <div className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-[4/5]">
            <video
              src="/video/hero1.mp4"
              poster={heroStore}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
              <span className="eyebrow">In the showroom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Home page order: Blazers lead, Inner Wear closes. Other categories keep
// their catalogue order. Collections page order is unchanged.
const homeCategories = [
  ...productCategories.filter((c) => c.slug === "blazers"),
  ...productCategories.filter((c) => c.slug !== "blazers" && c.slug !== "inner-wear"),
  ...productCategories.filter((c) => c.slug === "inner-wear"),
];

function CategoryIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = homeCategories[activeIndex];
  // The preview panel and its link follow the hovered or focused row.

  return (
    <section id="categories" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Shop by category"
            title="Eleven categories on our floor"
            description="Pick a category to see every style we have on the rails. Each one opens on the collections page."
          />
          <Reveal delay={0.1}>
            <Link
              to="/collections"
              className="link-underline text-[0.6875rem] tracking-[0.26em] uppercase"
            >
              View all collections
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <ol className="border-t border-border">
              {homeCategories.map((cat, i) => (
                <li key={cat.slug} className="border-b border-border">
                  <Link
                    to="/collections"
                    search={{ category: cat.slug }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    className="group flex items-center gap-4 py-5 sm:gap-6 sm:py-6"
                  >
                    <span className="w-7 shrink-0 text-xs tabular-nums text-gold sm:w-9">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-2xl leading-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                        {cat.name}
                      </span>
                      <span className="mt-1.5 block text-sm text-muted-foreground">{cat.note}</span>
                    </span>
                    <img
                      src={cat.cover}
                      alt=""
                      width={cat.w}
                      height={cat.h}
                      loading="lazy"
                      className="h-14 w-11 shrink-0 object-cover lg:hidden"
                    />
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                {homeCategories.map((cat, i) => (
                  <img
                    key={cat.slug}
                    src={cat.cover}
                    alt={i === activeIndex ? cat.name : ""}
                    aria-hidden={i !== activeIndex}
                    width={cat.w}
                    height={cat.h}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      i === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              {active ? (
                <div className="border-x border-b border-border bg-bone p-8">
                  <p className="eyebrow">Now showing</p>
                  <p className="mt-3 font-display text-3xl text-foreground">{active.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {active.copy}
                  </p>
                  <Link
                    to="/collections"
                    search={{ category: active.slug }}
                    className="group mt-6 inline-flex items-center gap-3 border-b border-ink pb-1 text-[0.6875rem] tracking-[0.26em] text-ink uppercase"
                  >
                    See {active.name}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <WhatsAppButton
                    variant="outline"
                    tone="light"
                    message={`Hello Ridhi Sidhi, I'd like to know more about your ${active.name} range.`}
                    className="mt-4 w-full px-5 py-3"
                  >
                    Ask about {active.name}
                  </WhatsAppButton>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <CategoryIndex />

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
              title="Names you already trust"
              description="We are a multi-brand stockist, not a single label's showroom. Peter England, Killer, Crimsoune Club and Jockey share the same rails."
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
            src={ownerPortrait}
            alt="The owner at the billing counter"
            className="aspect-[4/5]"
            width={1536}
            height={1024}
          />
        </div>
      </section>

      {/* Visit our store */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
          <div>
            <SectionHeading
              eyebrow="Visit Our Store"
              title="Come see the fabric in daylight"
              description="Photographs only go so far. Walk in, hold the cloth, try the fit. Our team will take it from there."
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
