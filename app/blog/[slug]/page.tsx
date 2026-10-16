import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

type P = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", publishedTime: p.date },
  };
}

export default async function Post({ params }: P) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.date,
          inLanguage: "cs-CZ",
          mainEntityOfPage: `${site.url}/blog/${p.slug}`,
          author: { "@id": `${site.url}/#pavel` },
          publisher: { "@id": `${site.url}/#agent` },
        }}
      />
      <article className="section">
        <div className="wrap narrow prose">
          <p className="meta">{new Date(p.date).toLocaleDateString("cs-CZ")} · {site.name}</p>
          <h1>{p.title}</h1>
          {p.body.map((s, i) => (
            <div key={i}>
              {s.h && <h2>{s.h}</h2>}
              {s.p.map((t, j) => <p key={j}>{t}</p>)}
            </div>
          ))}
        </div>
      </article>
      <CtaBand source={`blog-${p.slug}`} />
    </>
  );
}
