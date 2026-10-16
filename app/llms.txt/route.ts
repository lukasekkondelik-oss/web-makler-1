import { locations } from "@/lib/locations";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name} – ${site.role}, ${site.agency}

> Realitní makléř z Prostějova (${site.agency}). Makléřem od roku ${site.sinceYear}, přes 1 200 zprostředkovaných nemovitostí, úspěšnost téměř 95 %. Prodej bytů, domů a pozemků v Prostějově, Olomouci, Přerově a Kroměříži. Nezávazný odhad ceny zdarma.

## Hlavní stránky
- [Úvod](${site.url}/): přehled služeb a výsledků
- [Prodej nemovitosti](${site.url}/prodej-nemovitosti): jak probíhá prodej
- [Odhad ceny](${site.url}/odhad-nemovitosti): nezávazný odhad zdarma
- [O mně](${site.url}/o-mne): profil makléře a ocenění
- [Kontakt](${site.url}/kontakt)

## Lokality
${locations.map((l) => `- [${l.title}](${site.url}/lokality/${l.slug})`).join("\n")}

## Rady
${posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.description}`).join("\n")}

## Ověřené profily
- ${site.profileUrl}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
