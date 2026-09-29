import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, CalendarRange, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StoreMap } from "@/components/site/StoreMap";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { site } from "@/lib/site";

import heroShowroom from "@/assets/hero-showroom.jpg";
import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import catCasual from "@/assets/cat-casual.jpg";
import catFormal from "@/assets/cat-formal.jpg";
import storeExperience from "@/assets/store-experience.jpg";
import storeDetail from "@/assets/store-detail.jpg";
import galleryDenim from "@/assets/gallery-denim.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import accessories from "@/assets/accessories.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridhi Sidhi — Fashion That Defines Your Presence" },
      {
        name: "description",
        content:
          "A premium garment showroom with curated menswear, womenswear, kidswear, wedding and formal collections. Open 10 AM – 9 PM, every day.",
      },
      { property: "og:title", content: "Ridhi Sidhi — Fashion That Defines Your Presence" },
      {
        property: "og:description",
        content:
          "Curated menswear, womenswear, kidswear and wedding collections in one premium showroom. Visit us in store.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Men's Wear", note: "Tailoring, shirting & denim", image: catMen },
  { name: "Women's Wear", note: "Occasion, fusion & everyday", image: catWomen },
  { name: "Kids Wear", note: "Ages 2 to 14", image: catKids },
  { name: "Wedding Collection", note: "Sherwanis, lehengas & suits", image: catWedding },
  { name: "Casual Wear", note: "Knitwear, tees & weekend denim", image: catCasual },
  { name: "Formal Wear", note: "Workday shirting & trousers", image: catFormal },
];

const pillars = [
  {
    icon: Award,
    title: "Premium Quality",
    copy: "Every rail is hand-checked for fabric weight, stitch line and finish before it reaches the floor.",
  },
  {
    icon: CalendarRange,
    title: `Trusted Since ${site.established}`,
    copy: "Two generations of the same family have dressed this city for its biggest days.",
  },
  {
    icon: Sparkles,
    title: "Latest Collections",
    copy: "New arrivals land every fortnight, with a dedicated festive and wedding drop each season.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First Service",
    copy: "Unhurried fittings, honest advice and in-house alterations finished within 48 hours.",
  },
];

const testimonials = [
  {
    quote:
      "I came in for one interview shirt and walked out with a whole capsule wardrobe. Nobody rushed me, nobody upsold me.",
    name: "Aarav Mehta",
    role: "Software Engineer",
  },
  {
    quote:
      "We dressed the entire wedding party here — groom, brothers, both sets of parents. The coordination was flawless.",
    name: "Priya & Rohan Shah",
    role: "Married December 2025",
  },
  {
    quote:
      "The kids section is the only place my two actually enjoy shopping. Good fabrics that survive a school term.",
    name: "Neha Desai",
    role: "Parent of two",
  },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <motion.img
          src={heroShowroom}
          alt="Interior of the Ridhi Sidhi premium garment showroom"
          width={1920}
          height={1200}
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-24 lg:px-12">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {site.tagline} · Since {site.established}
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
            eyebrow="The Floors"
            title="Six worlds under one roof"
            description="Walk the showroom from tailored formals to weekend denim, and from first-day-of-school uniforms to the sherwani you will be photographed in for the rest of your life."
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
                    width={1024}
                    height={1408}
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

      {/* Store experience */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <RevealImage
            src={storeExperience}
            alt="A stylist assisting a customer at the fitting mirror"
            width={1600}
            height={1104}
            className="aspect-[4/5]"
          />
          <div>
            <SectionHeading
              eyebrow="Store Experience"
              title="Three floors, one unhurried hour"
              description="Our floor is designed the way a fitting should feel — wide aisles, warm light, full-length mirrors that tell the truth, and a stylist who waits while you decide."
            />
            <Reveal delay={0.15}>
              <dl className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  ["25+", "Years on the floor"],
                  ["48h", "In-house alterations"],
                  ["14", "Curated categories"],
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

      {/* Testimonials */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="In Their Words"
            title="Customers who keep coming back"
            align="center"
            tone="light"
          />
          <div className="mt-16 grid gap-px bg-bone/10 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between bg-ink p-10">
                  <blockquote className="font-display text-xl leading-relaxed text-bone/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-10">
                    <span className="rule-gold" />
                    <p className="mt-5 text-sm text-bone">{t.name}</p>
                    <p className="mt-1 text-[0.6875rem] tracking-[0.2em] text-bone/45 uppercase">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
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
              { src: storeDetail, alt: "Folded shirts on illuminated shelving", h: 1504, w: 1200 },
              { src: galleryDenim, alt: "Denim wall in the showroom", h: 912, w: 1200 },
              { src: accessories, alt: "Wallets, belts and cufflinks", h: 1200, w: 1200 },
              { src: galleryFamily, alt: "A family browsing the racks", h: 1504, w: 1200 },
              { src: catWedding, alt: "Wedding collection styling", h: 1408, w: 1024 },
              { src: storeExperience, alt: "Fitting room assistance", h: 1104, w: 1600 },
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
