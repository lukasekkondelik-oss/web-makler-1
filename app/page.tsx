import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Portrait } from "@/components/Portrait";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

const faq = [
  {
    q: "V jakých lokalitách pracujete?",
    a: "Působím v Prostějově, Olomouci, Přerově a Kroměříži a v jejich okolí. Pracuji pod značkou ERA RealPatria.",
  },
  {
    q: "Kolik stojí odhad ceny nemovitosti?",
    a: "Nezávazný odhad je zdarma a nezavazuje vás k prodeji ani ke spolupráci.",
  },
  {
    q: "Jak dlouho děláte realitního makléře?",
    a: `Realitám se věnuji od roku ${site.sinceYear}. Za tu dobu jsem zprostředkoval více než 1 200 nemovitostí s úspěšností téměř 95 %.`,
  },
  {
    q: "Co všechno při prodeji zařídíte?",
    a: "Od odhadu ceny přes prezentaci a prohlídky, jednání s kupujícími a právní servis až po předání nemovitosti. Vy se věnujete svému životu, já prodeji.",
  },
];

const services = [
  { t: "Prodej bytů", d: "Od garsonek po velké rodinné byty. Správná cena, kvalitní prezentace a jistota při předání." },
  { t: "Prodej domů a vil", d: "Rodinné domy i chalupy. Důraz na stav, dokumentaci a zacílení na správné kupující." },
  { t: "Prodej pozemků", d: "Stavební i ostatní pozemky. Ověření územního plánu a přístupu před zveřejněním." },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Realitní makléř · Prostějov a okolí</p>
            <h1>Prodám vaši nemovitost za férovou cenu. A bez starostí.</h1>
            <p className="lead">
              Jsem Pavel Beregsázi, realitní makléř ERA RealPatria. Pomáhám lidem v Prostějově, Olomouci, Přerově a
              Kroměříži prodat byt, dům nebo pozemek. Jasná cena, poctivá komunikace, výsledek.
            </p>
            <div className="cta-row">
              <Link href="/odhad-nemovitosti" className="btn">Chci nezávazný odhad</Link>
              <Link href="/o-mne" className="btn btn-ghost">Kdo jsem</Link>
            </div>
            <div className="badges" aria-label="Ocenění">
              {site.ranking.map((r) => <span key={r} className="badge">{r}</span>)}
            </div>
          </div>
          <Portrait />
        </div>
        <div className="wrap">
          <div className="stats">
            <div className="stat"><b>{site.stats.years}</b><span>let na trhu s nemovitostmi (od {site.sinceYear})</span></div>
            <div className="stat"><b>{site.stats.deals}</b><span>zprostředkovaných nemovitostí</span></div>
            <div className="stat"><b>{site.stats.success}</b><span>úspěšnost prodeje</span></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Co dělám</p>
          <h2>Prodej, který dává smysl</h2>
          <div className="grid3">
            {services.map((s) => (
              <Link key={s.t} href="/prodej-nemovitosti" className="card">
                <h3>{s.t}</h3><p>{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <p className="eyebrow">Jak to probíhá</p>
          <h2>Čtyři kroky od odhadu k předání</h2>
          <ol className="steps">
            <li><h3>Odhad a strategie</h3><p>Prohlédnu nemovitost, porovnám ji s reálnými prodeji a navrhnu cenu i postup.</p></li>
            <li><h3>Příprava a prezentace</h3><p>Fotografie, popis, inzerce a podklady. Vše tak, aby nabídka vynikla.</p></li>
            <li><h3>Prohlídky a vyjednávání</h3><p>Vybírám vážné zájemce, vedu prohlídky a hájím vaši cenu.</p></li>
            <li><h3>Smlouvy a předání</h3><p>Bezpečné právní zajištění a hladké předání nemovitosti i peněz.</p></li>
          </ol>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Kde působím</p>
          <h2>Znám místní trh, ulici po ulici</h2>
          <div className="grid2">
            {locations.map((l) => (
              <Link key={l.slug} href={`/lokality/${l.slug}`} className="card">
                <h3>{l.title}</h3><p>{l.lead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faq} />
      <CtaBand source="home" />
    </>
  );
}
