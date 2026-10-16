export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  body: { h?: string; p: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "jak-zjistit-cenu-nemovitosti",
    title: "Jak zjistit skutečnou cenu nemovitosti (a proč nestačí inzeráty)",
    description:
      "Nabídkové ceny na portálech nejsou ceny, za které se prodává. Jak postupovat, abyste nastavili cenu, která prodá.",
    date: "2026-10-01",
    body: [
      {
        p: [
          "Nejčastější chyba při prodeji: majitel se podívá na pár inzerátů v okolí a cenu nastaví podle nich. Jenže inzerát ukazuje, co si prodávající přeje, ne za kolik se nemovitost skutečně prodala.",
        ],
      },
      {
        h: "Z čeho odhad vychází",
        p: [
          "Spolehlivý odhad stojí na třech věcech: dokončených prodejích srovnatelných nemovitostí, aktuální poptávce v dané lokalitě a konkrétním stavu vaší nemovitosti (dispozice, patro, vybavení, rekonstrukce, právní stav).",
        ],
      },
      {
        h: "Proč vysoká „zkušební“ cena škodí",
        p: [
          "Nemovitost je nejvíc vidět v prvních týdnech po zveřejnění. Když je v té době předražená, zájemci ji přeskočí a později už působí jako „ležák“. Slevy pak vypadají jako slabost vyjednávací pozice.",
        ],
      },
      {
        h: "Co udělat teď",
        p: [
          "Připravte základní údaje (adresa, dispozice, stav, rok rekonstrukcí) a nechte si udělat nezávazný odhad. Dostanete číslo i doporučený postup prodeje.",
        ],
      },
    ],
  },
  {
    slug: "priprava-na-prodej-bytu",
    title: "Příprava na prodej bytu: kontrolní seznam před zveřejněním inzerátu",
    description:
      "Dokumenty, drobné opravy a fotografie, které rozhodují o tom, jak rychle a za kolik se byt prodá.",
    date: "2026-10-08",
    body: [
      {
        p: [
          "Kvalitně připravený byt se prodává rychleji a s menšími slevami. Většina příprav je přitom otázkou jednoho víkendu.",
        ],
      },
      {
        h: "Dokumenty",
        p: [
          "Výpis z katastru nemovitostí, energetický štítek, doklady od společenství vlastníků (fond oprav, plánované investice) a případně doklady o rekonstrukci. Čím víc podkladů máte hned, tím méně se zdržují zájemci i banky.",
        ],
      },
      {
        h: "Byt samotný",
        p: [
          "Uklidit, odstranit osobní věci, opravit drobnosti (kapající kohoutek, vyhořelé žárovky, uvolněné lišty) a dobře vyvětrat. Nejde o rekonstrukci, jde o dojem při první prohlídce.",
        ],
      },
      {
        h: "Prezentace",
        p: [
          "Profesionální fotografie a půdorys jsou základ. Inzerát je první prohlídka a většina zájemců se rozhodne, jestli přijde, už podle fotek.",
        ],
      },
    ],
  },
  {
    slug: "jak-vybrat-realitniho-maklere",
    title: "Jak vybrat realitního makléře: 6 otázek, které byste měli položit",
    description:
      "Co se ptát makléře dřív, než mu svěříte prodej nemovitosti, a podle čeho poznat, že vám opravdu pomůže.",
    date: "2026-10-12",
    body: [
      {
        p: [
          "Výběr makléře ovlivní cenu, za kterou prodáte, i vaše nervy. Tady je šest otázek, které se vyplatí položit hned na první schůzce.",
        ],
      },
      {
        h: "Otázky",
        p: [
          "1) Kolik podobných nemovitostí v mé lokalitě jste prodal a za jak dlouho? 2) Z čeho vychází váš odhad ceny? 3) Jak bude vypadat prezentace mé nemovitosti? 4) Jak často a jakou formou budete informovat? 5) Jaké jsou podmínky smlouvy a doba jejího trvání? 6) Jak řešíte právní stránku a bezpečné uložení kupní ceny?",
          "Dobrý makléř odpovídá konkrétně, s příklady z praxe a bez tlaku na podpis na první schůzce.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
