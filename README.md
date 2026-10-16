# Web pro makléře Pavla Beregsázi

Next.js 15 + TypeScript, statický web optimalizovaný pro SEO a AI vyhledávání. Research a zdůvodnění: [`docs/RESEARCH.md`](docs/RESEARCH.md).

## Spuštění
```bash
npm install
cp .env.example .env.local
npm run dev     # http://localhost:3000
npm run build
```

## Nasazení na Vercel
1. Importujte repozitář ve Vercelu (framework se rozpozná sám).
2. Nastavte env proměnné: `NEXT_PUBLIC_SITE_URL` (finální doména), `LEAD_WEBHOOK_URL` (např. n8n webhook), volitelně `LEAD_WEBHOOK_SECRET`.
3. Připojte doménu a po nasazení odešlete `/sitemap.xml` do Google Search Console a Bing Webmaster Tools.

Payload webhooku (JSON): `name, phone, email, type, address, message, source, page, consent, createdAt`. Bez `LEAD_WEBHOOK_URL` se poptávky jen logují.

## Co upravit
- `lib/site.ts`: kontakty, doména, `sameAs` (**TODO před spuštěním**)
- `lib/locations.ts`, `lib/posts.ts`: obsah lokálních stránek a článků
- `components/Portrait.tsx`: nahradit reálnou fotkou
