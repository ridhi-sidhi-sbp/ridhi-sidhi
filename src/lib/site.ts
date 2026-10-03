export const site = {
  name: "Ridhi Sidhi",
  tagline: "Premium Garment Showroom",
  phone: "+91 98250 41200",
  phoneHref: "tel:+919825041200",
  whatsapp: "919825041200",
  whatsappHref:
    "https://wa.me/919825041200?text=Hello%20Ridhi%20Sidhi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20collections.",
  email: "care@ridhisidhishowroom.in",
  address: {
    line1: "Ridhi Sidhi Showroom, VSS Road, Hans Nagar",
    line2: "Sambalpur, Odisha 768001",
  },
  hours: "10:00 AM – 9:00 PM, all days",
  mapsQuery: "21.467186,83.977294",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
