import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["", "/prodej-nemovitosti", "/odhad-nemovitosti", "/o-mne", "/blog", "/kontakt"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    priority: p === "" ? 1 : 0.8,
  }));
  return [
    ...fixed,
    ...locations.map((l) => ({ url: `${site.url}/lokality/${l.slug}`, lastModified: now, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
