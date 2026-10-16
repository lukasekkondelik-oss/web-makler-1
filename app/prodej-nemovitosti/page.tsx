import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prodej nemovitosti – byty, domy, pozemky | Prostějov, Olomouc",
  description:
    "Jak probíhá prodej bytu, domu nebo pozemku s realitním makléřem Pavlem Beregsázi: odhad, prezentace, prohlídky, smlouvy a předání.",
  alternates: { canonical: "/prodej-nemovitosti" },
};

const faq = [
  { q: "Jak dlouho prodej trvá?", a: "Záleží na ceně, stavu a lokalitě. Při správně nastavené ceně a kvalitní prezentaci se nemovitost prodává řádově v týdnech až několika měsících. Konkrétní odhad dám po prohlídce." },
  { q: "Musím mít nemovitost vyklizenou?", a: "Ne. Prohlídky lze dělat i v obývané nemovitosti. Pomohu vám s přípravou, aby působila co nejlépe." },
  { q: "Jak je zajištěna bezpečnost platby?", a: "Kupní cenu zajišťujeme standardními bezpečnými způsoby, například úschovou. Postup vždy předem vysvětlím." },
  { q: "Zavazuje mě odhad ceny k něčemu?", a: "Ne. Odhad je nezávazný a bezplatný." },
];

export default function Sell() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Zprostředkování prodeje nemovitosti",
          provider: { "@id": `${site.url}/#agent` },
          areaServed: ["Prostějov", "Olomouc", "Přerov", "Kroměříž"],
          serviceType: "Prodej bytů, domů a pozemků",
        }}
      />
      <section className="section">
        <div className="wrap narrow prose">
          <p className="eyebrow">Prodej nemovitosti</p>
          <h1>Prodej bytu, domu nebo pozemku bez zbytečných starostí</h1>
          <p className="lead">
            Od prvního odhadu až po předání klíčů. Prodej zajišťuji kompletně: cena, prezentace, prohlídky,
            vyjednávání i smlouvy.
          </p>
          <h2>Co v rámci prodeje dostanete</h2>
          <ul>
            <li><b>Odhad a cenová strategie</b>: z reálných prodejů, nikoli z odhadu od oka.</li>
            <li><b>Profesionální prezentace</b>: fotografie, popis, inzerce na hlavních portálech.</li>
            <li><b>Prohlídky a prověření zájemců</b>: čas trávíte jen s vážnými kupujícími.</li>
            <li><b>Vyjednávání</b>: hájím cenu a podmínky ve váš prospěch.</li>
            <li><b>Právní servis a předání</b>: smlouvy, katastr, bezpečné předání nemovitosti i peněz.</li>
          </ul>
          <h2>Co prodávám</h2>
          <ul>
            <li>Byty v osobním vlastnictví všech velikostí</li>
            <li>Rodinné domy, vily a chalupy</li>
            <li>Stavební a ostatní pozemky</li>
          </ul>
          <h2>Kde působím</h2>
          <p>
            {["prostejov", "olomouc", "prerov", "kromeriz"].map((s, i, a) => (
              <span key={s}>
                <Link href={`/lokality/${s}`}>{{ prostejov: "Prostějov", olomouc: "Olomouc", prerov: "Přerov", kromeriz: "Kroměříž" }[s]}</Link>
                {i < a.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            a okolí.
          </p>
        </div>
      </section>
      <Faq items={faq} />
      <CtaBand source="prodej" />
    </>
  );
}
