import { LeadForm } from "./LeadForm";
import { site } from "@/lib/site";

export function CtaBand({ source = "cta" }: { source?: string }) {
  return (
    <section className="cta-band" id="odhad">
      <div className="wrap cta-grid">
        <div>
          <p className="eyebrow" style={{ color: "#d6b97d" }}>Nezávazný odhad</p>
          <h2>Kolik je vaše nemovitost opravdu hodna?</h2>
          <p className="lead">
            Pošlete pár údajů. Ozvu se s konkrétním číslem vycházejícím z reálných prodejů v lokalitě a navrhnu
            postup prodeje. Bez závazku a bez tlaku.
          </p>
          <p className="lead">{site.name}, {site.agency}</p>
        </div>
        <LeadForm source={source} />
      </div>
    </section>
  );
}
