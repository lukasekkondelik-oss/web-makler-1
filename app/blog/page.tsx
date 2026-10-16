import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Rady k prodeji nemovitosti",
  description: "Praktické rady pro prodávající: odhad ceny, příprava nemovitosti, výběr makléře.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <section className="section">
      <div className="wrap narrow">
        <p className="eyebrow">Rady</p>
        <h1>Rady k prodeji nemovitosti</h1>
        <div className="grid2" style={{ gridTemplateColumns: "1fr", marginTop: 24 }}>
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
              <p className="meta">{new Date(p.date).toLocaleDateString("cs-CZ")}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
