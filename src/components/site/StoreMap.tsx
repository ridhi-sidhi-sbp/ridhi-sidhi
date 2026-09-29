import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function StoreMap({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden bg-muted ${className ?? ""}`}>
      <iframe
        title={`Map to ${site.name}`}
        src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
        className="absolute inset-0 h-full w-full grayscale-[0.4]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${site.mapsQuery}`}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 left-5 flex items-center gap-2 bg-ink px-5 py-3 text-[0.6875rem] tracking-[0.22em] text-bone uppercase transition-colors hover:bg-accent"
      >
        <MapPin className="size-3.5" />
        Get Directions
      </a>
    </div>
  );
}
