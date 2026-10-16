import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { getLocation, locations } from "@/lib/locations";
import { site } from "@/lib/site";

type P = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => locations.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = getLocation((await params).slug);
  if (!l) return {};
  return {
    title: `${l.title} – prodej bytů, domů a pozemků`,
    description: `${l.lead.slice(0, 150)}…`,
    alternates: { canonical: `/lokality/${l.slug}` },
  };
}

export default async function Location({ params }: P) {
  const l = getLocation((await params).slug);
  if (!l) notFound();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Úvod", item: site.url },
            { "@type": "ListItem", position: 2, name: l.title, item: `${site.url}/lokality/${l.slug}` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Prodej nemovitostí – ${l.name}`,
          provider: { "@id": `${site.url}/#agent` },
          areaServed: { "@type": "City", name: l.name },
        }}
      />
      <div className="wrap crumbs"><Link href="/">Úvod</Link> / {l.title}</div>
      <section className="section">
        <div className="wrap narrow prose">
          <p className="eyebrow">{l.region}</p>
          <h1>{l.title}</h1>
          <p className="lead">{l.lead}</p>
          <h2>Trh v lokalitě {l.name}</h2>
          <p>{l.market}</p>
          <h2>Čtvrti a části, kde prodávám</h2>
          <div className="badges">{l.areas.map((a) => <span className="badge" key={a}>{a}</span>)}</div>
          <h2>Tipy pro prodávající</h2>
          <ul>{l.tips.map((t) => <li key={t}>{t}</li>)}</ul>
          <p>
            <Link href="/odhad-nemovitosti" className="btn">Odhad nemovitosti v lokalitě {l.name}</Link>
          </p>
        </div>
      </section>
      <Faq items={l.faq} />
      <CtaBand source={`lokalita-${l.slug}`} />
    </>
  );
}
