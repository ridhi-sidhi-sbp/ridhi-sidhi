import { createFileRoute } from "@tanstack/react-router";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { site } from "@/lib/site";

import heroShowroom from "@/assets/hero-showroom.jpg";
import storeExterior from "@/assets/store-exterior.jpg";
import storeExperience from "@/assets/store-experience.jpg";
import storeDetail from "@/assets/store-detail.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ridhi Sidhi, A Family Garment Showroom Since 2000" },
      {
        name: "description",
        content:
          "The story of Ridhi Sidhi: a family-run premium garment showroom dressing students, professionals and families since 2000.",
      },
      { property: "og:title", content: "About Ridhi Sidhi — Premium Garment Showroom Since 2000" },
      {
        property: "og:description",
        content:
          "Two generations, one floor, and a simple belief: clothing should fit the person, not the trend.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "2000",
    title: "A single counter",
    copy: "Ridhi Sidhi opens as a 400 sq ft shirting counter on Ring Road, stocked with twelve fabrics and one tailor.",
  },
  {
    year: "2007",
    title: "The first full floor",
    copy: "Menswear expands into trousers, denim and blazers. The in-house alteration room opens behind the fitting mirrors.",
  },
  {
    year: "2018",
    title: "Kids & family",
    copy: "The ground floor is reworked so families can shop together, with a kids section built at a child's eye level.",
  },
  {
    year: "Today",
    title: "Eleven categories",
    copy: "Two floors, a standing alteration promise of 48 hours, and customers who now bring their own children in.",
  },
];

const highlights = [
  ["Two floors", "Menswear and kids, each with its own fitting suite."],
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
        title="Twenty-five years of getting the fit right"
        description="Ridhi Sidhi has been a family business from the first day — and the floor still runs the way a family would run it."
        image={heroShowroom}
        alt="The Ridhi Sidhi showroom floor"
      />

      {/* Our journey */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <div>
            <SectionHeading
              eyebrow="Our Journey"
              title="It began with twelve bolts of shirting"
              description="In 2000, a small counter on Ring Road sold cloth by the metre. Customers kept asking who could stitch it — so we hired a tailor, then a second, then took the shop next door. Everything since has grown out of a question a customer asked first."
            />
            <Reveal delay={0.15}>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                We have never carried a bargain bin, and we have never chased a trend for its own
                sake. What stays on the floor is what holds its shape after a season of real wear.
              </p>
            </Reveal>
          </div>
          <RevealImage
            src={storeExterior}
            alt="The showroom exterior in the evening"
            className="aspect-[4/5]"
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

      {/* Fashion for every generation */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <RevealImage
            src={galleryFamily}
            alt="A family shopping together in the showroom"
            className="aspect-[4/5]"
          />
          <div>
            <SectionHeading
              eyebrow="Every Generation"
              title="One floor for the whole family"
              description="A college student picking a first blazer, a father restocking his formal shirts, a nine-year-old insisting on the green jacket — they are all in the building on the same Saturday, and the floor is laid out so none of them has to wait outside."
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4">
                {[
                  "Men · tailoring, shirting, denim and weekend wear",
                  "Kids · ages 2 to 14, sized for a growth spurt",
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
              ["25+", "Years on Ring Road"],
              ["40,000+", "Customers dressed"],
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
            src={storeDetail}
            alt="Shirting stacked on illuminated shelving"
            className="aspect-[4/5]"
          />
        </div>
      </section>

      {/* Owner message */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-5 lg:gap-20 lg:px-12 lg:py-32">
          <RevealImage
            src={storeExperience}
            alt="On the showroom floor with a customer"
            className="aspect-[4/5] lg:col-span-2"
          />
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow">Owner's Message</span>
              <blockquote className="mt-8 font-display text-2xl leading-relaxed text-bone/90 sm:text-3xl">
                “My father measured his first customer standing in the doorway because the shop was
                too narrow for a mirror. We have more space now, but the promise has not changed —
                you leave wearing something that fits you, and you come back because of how you were
                treated while you decided.”
              </blockquote>
              <div className="mt-10">
                <span className="rule-gold" />
                <p className="mt-5 text-sm text-bone">Mahesh Agarwal</p>
                <p className="mt-1 text-[0.6875rem] tracking-[0.22em] text-bone/45 uppercase">
                  Proprietor, {site.name}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <SectionHeading eyebrow="Timeline" title="How the showroom grew" align="center" />
          <div className="mx-auto mt-16 max-w-3xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] gap-8 border-l border-border pl-8 pb-12 last:pb-0 sm:grid-cols-[7rem_1fr]">
                  <span className="relative font-display text-2xl text-accent">
                    <span className="absolute top-3 -left-[2.3rem] size-2 rounded-full bg-accent" />
                    {t.year}
                  </span>
                  <div>
                    <h3 className="text-xl">{t.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </PageShell>
  );
}
