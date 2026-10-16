// Jediné místo pro údaje o makléři. Vše označené TODO doplnit z podkladů klienta.
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pavelberegsazi.cz", // TODO: finální doména
  name: "Pavel Beregsázi",
  brand: "Pavel Beregsázi · realitní makléř",
  role: "Realitní makléř",
  agency: "ERA RealPatria",
  agencyUrl: "https://era-reality.cz/",
  profileUrl: "https://era-reality.cz/makleri/pavel-beregsazi/",
  city: "Prostějov",
  region: "Olomoucký kraj",
  // TODO: doplnit z profilu na era-reality.cz. Prázdné = web zobrazí jen formulář, nic si nevymýšlí.
  phone: "",
  phoneHref: "",
  email: "",
  street: "",
  postalCode: "",
  sinceYear: 2008,
  stats: {
    years: "16+",
    deals: "1 200+",
    success: "téměř 95 %",
  },
  ranking: [
    "1. místo v okrese Prostějov (žebříček Realita kroku 2025)",
    "1. místo v Olomouckém kraji (žebříček Realita kroku 2025)",
    "14. místo v ČR (žebříček Realita kroku 2025)",
  ],
  sameAs: [
    "https://era-reality.cz/makleri/pavel-beregsazi/",
    "https://www.realitakroku.cz/makler/pavel-beregsazi-1023",
    // TODO: Google Business Profile, Firmy.cz, LinkedIn, Facebook, Instagram, Sreality profil
  ],
} as const;

export const nav = [
  { href: "/prodej-nemovitosti", label: "Prodej nemovitosti" },
  { href: "/odhad-nemovitosti", label: "Odhad ceny" },
  { href: "/o-mne", label: "O mně" },
  { href: "/blog", label: "Rady" },
  { href: "/kontakt", label: "Kontakt" },
];
