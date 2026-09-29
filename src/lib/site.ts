export const site = {
  name: "Ridhi Sidhi",
  tagline: "Premium Garment Showroom",
  established: 2000,
  phone: "+91 98250 41200",
  phoneHref: "tel:+919825041200",
  whatsapp: "919825041200",
  whatsappHref:
    "https://wa.me/919825041200?text=Hello%20Ridhi%20Sidhi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20collections.",
  email: "care@ridhisidhishowroom.in",
  address: {
    line1: "Ridhi Sidhi Showroom, 14 Ring Road",
    line2: "Near Central Plaza, Surat, Gujarat 395002",
  },
  hours: "10:00 AM – 9:00 PM, all days",
  mapsQuery: "Ring+Road+Surat+Gujarat",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
