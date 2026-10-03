import { createFileRoute } from "@tanstack/react-router";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { site } from "@/lib/site";

import heroStore from "@/assets/photos/full/storefront/storefront-01.webp";
import journeyStorefront from "@/assets/photos/card/storefront/storefront-01.webp";
import floorCustomers from "@/assets/photos/card/customers/customers-01.webp";
import highlightsStore from "@/assets/photos/card/store/store-01.webp";
import ownerPortrait from "@/assets/photos/card/owner/owner-01.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ridhi Sidhi, A Family Garment Showroom" },
      {
        name: "description",
        content:
          "The story of Ridhi Sidhi: a family-run premium garment showroom dressing students, professionals and families.",
      },
      { property: "og:title", content: "About Ridhi Sidhi — Premium Garment Showroom" },
      {
        property: "og:description",
        content:
          "A family-run showroom and a simple belief: clothing should fit the person, not the trend.",
      },
    ],
  }),
  component: About,
});

const highlights = [
  [
    "In-store trial room",
    "A dedicated fitting suite, off the main floor, with a full-length mirror.",
  ],
  [
    "In-house alterations",
    "Hem, taper and let-out finished within 48 hours, free on first purchase.",
  ],
  ["Appointment fittings", "Reserved slots for festive and bulk family shopping."],
  ["Fabric-first buying", "We buy by hand-feel and weight, never by catalogue photograph."],
];

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="A family showroom, built on getting the fit right"
        description="Ridhi Sidhi has been a family business from the first day — and the floor still runs the way a family would run it."
        image={heroStore}
        alt="Illuminated shelving inside the Ridhi Sidhi showroom"
        position="object-top"
        heightClass="h-[80vh] min-h-[520px]"
        width={1600}
        height={1333}
      />

      {/* Our approach */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title="Chosen by hand, not by catalogue"
              description="We buy by feel — the weight of the cloth, the way it drapes, whether it holds its shape after a season of real wear. We have never carried a bargain bin, and we do not chase a trend for its own sake."
            />
            <Reveal delay={0.15}>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                What's on the rail today is what earns a second visit — checked by hand before it
                reaches the floor, and backed by an in-house alteration team that gets the fit
                right.
              </p>
            </Reveal>
          </div>
          <RevealImage
            src={journeyStorefront}
            alt="The Ridhi Sidhi storefront"
            className="aspect-[4/5]"
            width={900}
            height={600}
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Store Philosophy"
            title="Clothing should fit the person, not the trend"
            align="center"
            tone="light"
          />
          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-3">
            {[
              [
                "Fabric before label",
                "We buy with our hands. Weight, drape and recovery decide what gets shelf space.",
              ],
              [
                "Time at the mirror",
                "No one is moved along. A good fitting takes as long as a good fitting takes.",
              ],
              [
                "Honest counsel",
                "If a cut is wrong for you, we will say so — even when a sale walks out of the door.",
              ],
            ].map(([title, copy], i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="h-full bg-ink p-10">
                  <h3 className="text-xl text-bone">{title}</h3>
                  <span className="rule-gold mt-5" />
                  <p className="mt-5 text-sm leading-relaxed text-bone/65">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's on the floor */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <RevealImage
            src={floorCustomers}
            alt="A customer being helped at the service counter"
            className="aspect-[4/5]"
            width={900}
            height={600}
          />
          <div>
            <SectionHeading
              eyebrow="On The Floor"
              title="Built around how men actually shop"
              description="Every rail is grouped by fit and fabric rather than by season, so you can compare like with like — then take it straight to the trial room without waiting in line."
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4">
                {[
                  "Shirting & tees · everyday cotton to easy-iron formals",
                  "Denim & tailoring · jeans, cargos and blazers side by side",
                  "Trousers · formal, half and track, sized true",
                  "Innerwear & accessories · wallets, belts and essentials at the counter",
                ].map((line) => (
                  <li key={line} className="flex gap-4 text-sm leading-relaxed">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Customer trust */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Customer Trust"
            title="The numbers we actually care about"
            align="center"
          />
          <div className="mt-16 grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["11", "Curated categories"],
              ["4", "Brands stocked"],
              ["48h", "Alteration turnaround"],
            ].map(([value, label], i) => (
              <Reveal key={label} delay={i * 0.08}>
                <p className="font-display text-5xl text-accent">{value}</p>
                <p className="mt-3 text-[0.6875rem] tracking-[0.22em] text-muted-foreground uppercase">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store highlights */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <div>
            <SectionHeading eyebrow="Store Highlights" title="What the floor gives you" />
            <div className="mt-12 divide-y divide-border border-y border-border">
              {highlights.map(([title, copy], i) => (
                <Reveal key={title} delay={i * 0.07}>
                  <div className="py-7">
                    <h3 className="text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <RevealImage
            src={highlightsStore}
            alt="Shirting stacked on illuminated shelving"
            className="aspect-[4/5]"
            width={900}
            height={600}
          />
        </div>
      </section>

      {/* Owner */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-5 lg:gap-20 lg:px-12 lg:py-32">
          <RevealImage
            src={ownerPortrait}
            alt="The owner at the billing counter"
            className="aspect-[4/5] lg:col-span-2"
            width={900}
            height={600}
          />
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow">The Owner</span>
              <p className="mt-8 font-display text-2xl leading-relaxed text-bone/90 sm:text-3xl">
                Every fitting on this floor is signed off from this counter — the same place new
                stock gets checked by hand before it goes on the rail.
              </p>
              <div className="mt-10">
                <span className="rule-gold" />
                <p className="mt-5 text-[0.6875rem] tracking-[0.22em] text-bone/45 uppercase">
                  Proprietor, {site.name}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </PageShell>
  );
}
