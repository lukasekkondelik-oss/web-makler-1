import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const viewport: Viewport = { themeColor: "#0f1b2d", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Realitní makléř Prostějov · Pavel Beregsázi | ERA RealPatria",
    template: "%s | Pavel Beregsázi",
  },
  description:
    "Prodej bytů, domů a pozemků v Prostějově, Olomouci, Přerově a Kroměříži. Makléř od roku 2008, přes 1 200 nemovitostí. Nezávazný odhad ceny zdarma.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "cs_CZ", siteName: site.name, url: site.url },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Entita: osoba + firma (RealEstateAgent) – propojené @id, shodné s viditelným obsahem
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "cs-CZ",
      publisher: { "@id": `${site.url}/#agent` },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${site.url}/#agent`,
      name: `${site.name} – ${site.role}`,
      url: site.url,
      ...(site.phone ? { telephone: site.phone } : {}),
      ...(site.email ? { email: site.email } : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: "CZ",
        ...(site.street ? { streetAddress: site.street } : {}),
        ...(site.postalCode ? { postalCode: site.postalCode } : {}),
      },
      areaServed: ["Prostějov", "Olomouc", "Přerov", "Kroměříž"].map((n) => ({ "@type": "City", name: n })),
      parentOrganization: { "@type": "Organization", name: site.agency, url: site.agencyUrl },
      employee: { "@id": `${site.url}/#pavel` },
      sameAs: site.sameAs,
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#pavel`,
      name: site.name,
      jobTitle: site.role,
      worksFor: { "@type": "Organization", name: site.agency, url: site.agencyUrl },
      url: `${site.url}/o-mne`,
      knowsAbout: ["prodej nemovitostí", "odhad ceny nemovitosti", "prodej bytů", "prodej rodinných domů", "pozemky"],
      sameAs: site.sameAs,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <JsonLd data={graph} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Link href="/odhad-nemovitosti" className="btn btn-brass sticky-call">Nezávazný odhad zdarma</Link>
      </body>
    </html>
  );
}
