import type { ReactNode } from "react";
import { site, whatsappLink } from "@/lib/site";

/** The WhatsApp logo mark. Drawn inline so it takes the surrounding text colour. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/**
 * Gold-and-ink WhatsApp button used across the site. Deliberately not the
 * stock green brand button: it follows the showroom palette instead.
 *
 * `message` pre-fills the chat (for example, the category a visitor is
 * looking at). Without it the button opens the general enquiry chat.
 */
export function WhatsAppButton({
  children = "Chat on WhatsApp",
  message,
  variant = "solid",
  tone = "dark",
  className = "",
}: {
  children?: ReactNode;
  message?: string;
  variant?: "solid" | "outline";
  /** Background the button sits on, so the outline colours stay readable. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const href = message ? whatsappLink(message) : site.whatsappHref;

  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold-soft"
      : tone === "dark"
        ? "border border-bone/40 text-bone hover:bg-bone hover:text-ink"
        : "border border-ink text-ink hover:bg-ink hover:text-bone";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-3 px-9 py-4 text-[0.6875rem] tracking-[0.24em] uppercase transition-colors duration-500 ${styles} ${className}`}
    >
      <WhatsAppIcon className="size-4" />
      {children}
    </a>
  );
}

/**
 * Fixed chat button shown on every page. Ink square with a gold hairline; the
 * label slides out on hover so the icon stays quiet until someone wants it.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ridhi Sidhi on WhatsApp"
      className="group fixed right-5 bottom-5 z-[60] flex items-stretch bg-ink shadow-[0_18px_40px_-12px_rgba(17,17,17,0.55)] ring-1 ring-gold/50 transition-shadow duration-500 hover:ring-gold sm:right-8 sm:bottom-8"
    >
      <span className="grid size-14 place-items-center">
        <WhatsAppIcon className="size-5 text-gold-soft" />
      </span>
      <span className="grid max-w-0 place-items-center overflow-hidden whitespace-nowrap text-[0.6875rem] tracking-[0.24em] text-bone uppercase transition-[max-width,padding] duration-700 group-hover:max-w-[240px] group-hover:pr-6 group-hover:pl-1">
        Chat with us
      </span>
    </a>
  );
}
