import Link from "next/link";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          <strong>{site.name}</strong>
          <p>{site.role}, {site.agency}<br />{site.city}, {site.region}</p>
          {site.phone && <p><a href={site.phoneHref}>{site.phone}</a></p>}
          {site.email && <p><a href={`mailto:${site.email}`}>{site.email}</a></p>}
        </div>
        <div>
          <strong>Lokality</strong>
          <ul>
            {locations.map((l) => (
              <li key={l.slug}><Link href={`/lokality/${l.slug}`}>{l.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Web</strong>
          <ul>
            <li><Link href="/prodej-nemovitosti">Prodej nemovitosti</Link></li>
            <li><Link href="/odhad-nemovitosti">Odhad ceny</Link></li>
            <li><Link href="/blog">Rady</Link></li>
            <li><a href={site.profileUrl} rel="noopener">Profil na ERA</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bot">
        <span>© {new Date().getFullYear()} {site.name}. Makléř pracuje pod značkou {site.agency}.</span>
        <span>Zpracování osobních údajů: údaje z formuláře slouží jen k vyřízení vaší poptávky.</span>
      </div>
    </footer>
  );
}
