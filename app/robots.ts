import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Záměrně povolujeme vyhledávače i AI crawlery (ChatGPT, Claude, Perplexity, Gemini),
// aby mohly web citovat v odpovědích.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
