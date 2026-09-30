import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function WhatsAppCta() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Personal Styling Desk</span>
          <h2 className="mt-6 text-3xl leading-[1.15] text-bone sm:text-4xl lg:text-5xl">
            Message us before you visit and we'll keep your sizes ready.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bone/65">
            Share the occasion — an interview, a festive outing, a first day at college — and our
            floor team will pull a rail together for your arrival.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-3 bg-accent px-9 py-4 text-[0.6875rem] tracking-[0.24em] text-accent-foreground uppercase transition-colors hover:bg-gold-soft sm:w-auto"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="flex w-full items-center justify-center gap-3 border border-bone/40 px-9 py-4 text-[0.6875rem] tracking-[0.24em] text-bone uppercase transition-colors hover:bg-bone hover:text-ink sm:w-auto"
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
