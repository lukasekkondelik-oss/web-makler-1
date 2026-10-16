import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Portrait } from "@/components/Portrait";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "O mně – Pavel Beregsázi, realitní makléř",
  description: `Realitní makléř Pavel Beregsázi (ERA RealPatria): makléřem od roku ${site.sinceYear}, přes 1 200 nemovitostí, působí v Prostějově, Olomouci, Přerově a Kroměříži.`,
  alternates: { canonical: "/o-mne" },
};

export default function About() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: { "@id": `${site.url}/#pavel` },
          url: `${site.url}/o-mne`,
        }}
      />
      <section className="section">
        <div className="wrap hero-grid">
          <div className="prose">
            <p className="eyebrow">O mně</p>
            <h1>Pavel Beregsázi</h1>
            <p className="lead">
              Realitní makléř ERA RealPatria z Prostějova. Realitám se věnuji od roku {site.sinceYear} a za tu dobu
              jsem zprostředkoval více než 1 200 nemovitostí s úspěšností téměř 95 %.
            </p>
            <p>
              Moje práce stojí na třech věcech: realistické ceně, kvalitní prezentaci a otevřené komunikaci. Říkám
              majitelům pravdu o ceně, i když není vždy příjemná, protože jen tak se nemovitost prodá rychle a bez
              zbytečných slev.
            </p>
            <h2>Čím se liší moje spolupráce</h2>
            <ul>
              <li>Cenu stavím na reálných prodejích v lokalitě, ne na přáních ani nabídkových cenách.</li>
              <li>Jsem v kontaktu: víte, co se s prodejem děje, kdo se zajímá a co říkají prohlídky.</li>
              <li>Řeším celý proces včetně právního servisu, abyste nemuseli nic hlídat sami.</li>
            </ul>
            <h2>Ocenění a výsledky</h2>
            <ul>{site.ranking.map((r) => <li key={r}>{r}</li>)}</ul>
            <p className="meta">Zdroj: veřejný žebříček makléřů Realita kroku. Údaje o počtu nemovitostí a úspěšnosti pocházejí z vlastního profilu makléře.</p>
            <p>
              Oficiální profil najdete také na{" "}
              <a href={site.profileUrl} rel="noopener">webu ERA</a>.
            </p>
            {/* TODO: doplnit osobní příběh, rodinu/zájmy, certifikace, vzdělání – to je to, co lidi přesvědčí */}
          </div>
          <Portrait />
        </div>
      </section>
      <CtaBand source="o-mne" />
    </>
  );
}
