import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Odhad ceny nemovitosti zdarma – Prostějov, Olomouc, Přerov, Kroměříž",
  description:
    "Nezávazný odhad ceny bytu, domu nebo pozemku od realitního makléře. Vychází z reálných prodejů v lokalitě. Zdarma a bez závazku.",
  alternates: { canonical: "/odhad-nemovitosti" },
};

const faq = [
  { q: "Z čeho odhad vychází?", a: "Z dokončených prodejů srovnatelných nemovitostí, aktuální poptávky v lokalitě a konkrétního stavu vaší nemovitosti." },
  { q: "Kdy se vám ozvu?", a: "Obvykle týž pracovní den. Pokud je potřeba, domluvíme krátkou prohlídku." },
  { q: "Musím nemovitost po odhadu prodat?", a: "Ne. Odhad je nezávazný a bezplatný." },
];

export default function Valuation() {
  return (
    <>
      <section className="section">
        <div className="wrap cta-grid">
          <div className="prose">
            <p className="eyebrow">Odhad zdarma</p>
            <h1>Kolik je vaše nemovitost opravdu hodna?</h1>
            <p className="lead">
              Vyplňte krátký formulář. Ozvu se s konkrétním číslem a doporučením, jak a kdy prodávat. Odhad je
              nezávazný a bezplatný.
            </p>
            <ul>
              <li>Vychází z reálných prodejů, ne z inzerátů</li>
              <li>Zohledňuje stav i lokalitu vaší nemovitosti</li>
              <li>Bez závazku, bez tlaku, bez nutnosti prodávat</li>
            </ul>
          </div>
          <LeadForm variant="valuation" source="odhad" />
        </div>
      </section>
      <Faq items={faq} />
    </>
  );
}
