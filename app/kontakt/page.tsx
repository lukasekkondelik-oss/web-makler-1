import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – Pavel Beregsázi, realitní makléř",
  description: "Kontaktujte realitního makléře Pavla Beregsázi (ERA RealPatria) v Prostějově. Odpovídám obvykle týž pracovní den.",
  alternates: { canonical: "/kontakt" },
};

export default function Contact() {
  return (
    <section className="section">
      <div className="wrap cta-grid">
        <div className="prose">
          <p className="eyebrow">Kontakt</p>
          <h1>Ozvěte se, probereme to</h1>
          <p className="lead">Napište nebo zavolejte. Odpovídám obvykle týž pracovní den.</p>
          <p>
            <b>{site.name}</b><br />
            {site.role}, {site.agency}<br />
            {site.street && <>{site.street}<br /></>}
            {site.postalCode} {site.city}
          </p>
          {site.phone && <p>Telefon: <a href={site.phoneHref}>{site.phone}</a></p>}
          {site.email && <p>E-mail: <a href={`mailto:${site.email}`}>{site.email}</a></p>}
          <p><a href={site.profileUrl} rel="noopener">Můj profil na webu ERA</a></p>
        </div>
        <LeadForm variant="contact" source="kontakt" />
      </div>
    </section>
  );
}
