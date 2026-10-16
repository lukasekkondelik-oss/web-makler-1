# Research a návrh webu: Pavel Beregsázi (ERA RealPatria)

## 1. Co je o klientovi ověřeno
Přímý přístup na `era-reality.cz` byl ze sandboxu zablokovaný, takže vycházím z veřejných výsledků vyhledávání.

| Údaj | Hodnota | Zdroj |
|---|---|---|
| Kancelář | ERA RealPatria, Prostějov | profil na ERA, Realitymix |
| Makléřem od | 2008 (16+ let) | vlastní profil |
| Počet nemovitostí | 1 200+ | vlastní profil (tvrzení makléře) |
| Úspěšnost | téměř 95 % | vlastní profil (tvrzení makléře) |
| Oblast | Prostějov, Olomouc, Přerov, Kroměříž (aktivní nabídky i Mohelnice, Šternberk) | profil na ERA |
| Žebříček Realita kroku 2025 | 1. okres Prostějov, 1. Olomoucký kraj, 14. v ČR | realitakroku.cz |

**Chybí (doplnit od klienta):** telefon, e-mail, adresa kanceláře, fotografie, reálné recenze, osobní příběh, certifikace, odkazy na Sreality/Firmy.cz/Google profil. Web si tyto údaje nevymýšlí: telefon a e-mail se zobrazí, jen když jsou vyplněné v `lib/site.ts`.

## 2. Konkurence a trh (Prostějov)
Lokální kanceláře (JH Reality, Ostrov Realit, Okno Nemovitostí, Reality Josef Bystroň a další) jsou většinou klasické firemní weby. Okno Nemovitostí zmiňuje 2. místo v okrese v soutěži Realitka roku 2024. **Příležitost:** Pavel je podle žebříčku Realita kroku **1. v okrese**, což dnes nikdo z nich nemůže tvrdit. Web to dává do hero sekce jako trust signál.

## 3. SEO: co z research plyne
- **Google Business Profile** je nejsilnější lokální signál (relevance, vzdálenost, prominence). Je nutné ho založit/ověřit a držet **konzistentní NAP** (jméno, adresa, telefon) všude stejně. Web samotný to nenahradí.
- **Lokální stránky s unikátním obsahem** pro každé město (hyperlokální obsah patří mezi klíčové signály). Web má 4 stránky `/lokality/*`; než půjdou ven, je potřeba je obohatit reálnými daty a příběhy z prodejů.
- **Čeština a Seznam:** Google má v ČR zhruba 84 % trhu podle jednoho SEO zdroje, Seznam stále hraje roli (a přes Firmy.cz). Seznam si podle zdrojů zakládá na čisté HTML struktuře a hierarchii nadpisů, proto je web server-renderovaný se správným H1–H3. **Zapsat firmu na Firmy.cz.**
- **Čas:** lokální zlepšení se obvykle projeví do cca 90 dnů, širší organický růst za 4–9 měsíců (zdroje jsou převážně agenturní, čísla neověřená).
- **Core Web Vitals** (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1): web je statický (SSG), bez externích fontů a skriptů, první načtení ~103–107 kB JS.

## 4. AI vyhledávání (GEO/AEO): střízlivě
Zdroje jsou většinou vendor blogy, takže klíčové je, co **není** prokázáno:
- Google tvrdí, že pro AI funkce nepotřebuje žádný zvláštní markup. Studie nenašly spolehlivý nárůst citací jen kvůli schématu. **Pořadí v organice je nejsilnější prediktor citace v AI.**
- **FAQ rich results Google od 7. 5. 2026 nezobrazuje.** FAQ jsem na webu nechal pro uživatele, ale nesázím na ně jako na SEO trik.
- ChatGPT prohledává přes Bing → odeslat web do **Bing Webmaster Tools**. Perplexity cituje živý web. AI Overviews vychází z indexu Google.
- **Co web dělá:** povoluje AI crawlery v `robots.txt`, je server-renderovaný (obsah nezávisí na JS), má JSON-LD (`RealEstateAgent` + `Person` + `ProfilePage`, propojené `@id`, `sameAs`), `llms.txt` (volitelné, nízká cena), konkrétní fakta v prvních větách stránek (kdo, kde, od kdy, kolik) a autora u článků.
- **Co rozhodne mimo web:** zmínky a profily na třetích stranách (ERA, Realita kroku, Sreality, Firmy.cz, Google, recenze). AI modely citují to, co o makléři říkají nezávislé zdroje. Proto je důležité `sameAs`.
- **Měření:** jednou měsíčně zadat do ChatGPT, Perplexity a Gemini dotazy typu „nejlepší realitní makléř Prostějov", „odhad ceny bytu Prostějov" a zapsat, kdo je citován.

## 5. Úspěšné weby realitních makléřů: vzorce
(Zdroje jsou agenturní a template listy; čísla konverzí neověřená.)
- **Osobní značka vyhrává nad generickým layoutem.** Solo makléř = vlastní tvář, jméno, hlas (příklady: Serhant, Ginger Martin + Co).
- **Důvěra je hlavní konverzní faktor:** reference, ocenění, čísla, fotka. → hero s žebříčkem a statistikami.
- **Jeden hlavní CTA:** „nezávazný odhad". Je to nejsilnější lead magnet pro prodávající a odpovídá tomu, co lidé googlí.
- **Rychlost na mobilu:** většina návštěv; proto lepicí tlačítko „Odhad zdarma".
- **Blog/rady** a lokální stránky pro dlouhodobé SEO.

## 6. Návrh: co bylo postaveno
**Strategie:** web prodává *prodávajícím* (ne kupujícím). Inzeráty zůstávají na Sreality/ERA, web je osobní značka + sběr poptávek na odhad.

| Stránka | Účel / klíčový dotaz |
|---|---|
| `/` | značka, trust, 1 CTA; „realitní makléř Prostějov" |
| `/odhad-nemovitosti` | lead magnet; „odhad ceny nemovitosti Prostějov" |
| `/prodej-nemovitosti` | služba a proces |
| `/lokality/{prostejov,olomouc,prerov,kromeriz}` | lokální SEO |
| `/o-mne` | E-E-A-T, osobní příběh, ocenění |
| `/blog` + 3 úvodní články | dlouhý ocas, AI citace |
| `/kontakt` | NAP, formulář |

**Design:** tmavě modrá (#0f1b2d) + mosaz + teplá béžová; patkové nadpisy (Georgia) a systémové písmo, bez webfontů = rychlé. Klidný, prémiový tón. *Pozor:* ERA je franšíza s vlastním brandem; ověřte, zda manuál dovoluje osobní web v jiných barvách a zda je nutné uvádět logo/disclaimer.

**Technika:** Next.js 15 (App Router), statické generování, formulář → `/api/lead` → webhook (`LEAD_WEBHOOK_URL`, ideálně n8n) s honeypotem a souhlasem GDPR. `sitemap.xml`, `robots.txt`, OG obrázek, JSON-LD, bezpečnostní hlavičky.

## 7. Než půjde web ven (checklist)
1. Doplnit `lib/site.ts` (telefon, e-mail, adresa, finální doména, `sameAs`).
2. Nahrát profesionální portrét (nahradit `components/Portrait.tsx`), je to největší trust signál.
3. Doplnit **reálné recenze** (se jménem a zdrojem) a příběhy prodejů; ověřit u klienta čísla (1 200+, 95 %).
4. Ověřit čtvrti a tvrzení na lokálních stránkách a doplnit je reálnými daty z prodejů (jinak hrozí „thin content").
5. Doplnit právní stránky (zásady zpracování osobních údajů; web nepoužívá cookies ani analytiku, při přidání analytiky řešit souhlas).
6. Založit/ověřit Google Business Profile, Firmy.cz, Bing Webmaster Tools a Google Search Console; odeslat sitemap.
7. Zkontrolovat shodu textů s pravidly ERA (uvádění úspěšnosti a žebříčků).

## Zdroje
- [Luxury Presence: lokální SEO pro makléře](https://www.luxurypresence.com/?p=4774)
- [Real Estate Schema Markup (Luxury Presence)](https://www.luxurypresence.com/blogs/real-estate-schema-markup/)
- [schema.org/RealEstateAgent](https://schema.org/RealEstateAgent)
- [FAQ Schema Is Dead: What Earns AI Citations in 2026](https://aifromthefield.substack.com/p/faq-schema-dead-ai-citations)
- [Dataslayer: GEO průvodce](https://www.dataslayer.ai/blog/generative-engine-optimization-the-ai-search-guide)
- [Podíl Seznamu a Googlu (xpert.digital)](https://xpert.digital/cs/seo-in-tschechien)
- [Vercel: Core Web Vitals](https://vercel.com/kb/guide/how-to-improve-core-web-vitals)
- [Realita kroku: profil Pavla Beregsázi](https://www.realitakroku.cz/makler/pavel-beregsazi-1023)
- [Profil na ERA](https://era-reality.cz/makleri/pavel-beregsazi/)
- [Redefine Web: designy realitních webů](https://redefineweb.com/blog/best-real-estate-website-designs-examples-convert/)
