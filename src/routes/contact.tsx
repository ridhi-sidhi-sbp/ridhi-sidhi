import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StoreMap } from "@/components/site/StoreMap";
import { site } from "@/lib/site";

import storeExterior from "@/assets/store-exterior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Ridhi Sidhi Premium Garment Showroom" },
      {
        name: "description",
        content:
          "Store address, hours (10 AM – 9 PM daily), phone, WhatsApp and directions to the Ridhi Sidhi premium garment showroom.",
      },
      { property: "og:title", content: "Contact & Visit — Ridhi Sidhi" },
      {
        property: "og:description",
        content: "Find us, call us, or message on WhatsApp. Open 10 AM – 9 PM, all days.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Showroom", lines: [site.address.line1, site.address.line2] },
  {
    icon: Clock,
    label: "Store Hours",
    lines: [site.hours, "Extended hours during festive season"],
  },
  { icon: Phone, label: "Phone", lines: [site.phone] },
  { icon: Mail, label: "Email", lines: [site.email] },
];

const fieldClass =
  "w-full border-b border-border bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Come in, or start the conversation here"
        description="Open every day from 10 AM to 9 PM. Call ahead for a wedding appointment and we'll reserve the mezzanine."
        image={storeExterior}
        alt="The Ridhi Sidhi storefront at dusk"
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-32">
          <div>
            <SectionHeading
              eyebrow="Store Information"
              title="Where to find us"
              description="We are on Ring Road, a two-minute walk from Central Plaza, with parking behind the building."
            />

            <div className="mt-12 space-y-10">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.07}>
                  <div className="flex gap-5">
                    <d.icon className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.3} />
                    <div>
                      <p className="eyebrow">{d.label}</p>
                      {d.lines.map((line) => (
                        <p key={line} className="mt-2 text-sm leading-relaxed text-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.6875rem] tracking-[0.24em] text-bone uppercase transition-colors hover:bg-accent"
                >
                  <Phone className="size-4" />
                  Call the Store
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 border border-ink px-8 py-4 text-[0.6875rem] tracking-[0.24em] uppercase transition-colors hover:bg-ink hover:text-bone"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="bg-bone p-8 sm:p-12">
                <span className="eyebrow">Write to us</span>
                <h2 className="mt-5 text-3xl">Plan your visit</h2>
                <span className="rule-gold mt-6" />

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-10"
                    >
                      <p className="font-display text-2xl">Thank you.</p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        Your note has been recorded on this page. For the fastest reply, send the
                        same message on WhatsApp — our floor team answers within store hours.
                      </p>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href={site.whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-ink px-8 py-4 text-[0.6875rem] tracking-[0.24em] text-bone uppercase transition-colors hover:bg-accent"
                        >
                          Continue on WhatsApp
                        </a>
                        <button
                          type="button"
                          onClick={() => setSent(false)}
                          className="link-underline text-[0.6875rem] tracking-[0.24em] uppercase"
                        >
                          Write another
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-10 space-y-8"
                    >
                      <div>
                        <label htmlFor="name" className="eyebrow">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="eyebrow">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="occasion" className="eyebrow">
                          Occasion
                        </label>
                        <input
                          id="occasion"
                          name="occasion"
                          placeholder="Wedding, interview, festive, everyday…"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="eyebrow">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us what you're looking for and when you'd like to visit."
                          className={`${fieldClass} resize-none`}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-ink px-8 py-5 text-[0.6875rem] tracking-[0.26em] text-bone uppercase transition-colors hover:bg-accent"
                      >
                        Send Enquiry
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-12 lg:pb-32">
          <div className="pt-24 lg:pt-32">
            <SectionHeading eyebrow="Directions" title="Find the showroom" align="center" />
          </div>
          <Reveal delay={0.1} className="mt-14">
            <StoreMap className="aspect-[16/9]" />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
