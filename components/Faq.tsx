export function Faq({ items, title = "Časté otázky" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="section" aria-labelledby="faq-h">
      <div className="wrap narrow">
        <h2 id="faq-h">{title}</h2>
        <div className="faq">
          {items.map((i) => (
            <details key={i.q}>
              <summary>{i.q}</summary>
              <p>{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
