export type Location = {
  slug: string;
  name: string;
  region: string;
  title: string;
  lead: string;
  areas: string[];
  market: string;
  tips: string[];
  faq: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "prostejov",
    name: "Prostějov",
    region: "Olomoucký kraj",
    title: "Realitní makléř Prostějov",
    lead: "Prostějov je domovská základna Pavla Beregsázi. Prodej bytů, rodinných domů i pozemků v Prostějově a okolí zná z více než 16 let každodenní praxe.",
    areas: ["centrum", "Vrahovice", "Krasice", "Domamyslice", "Čechovice", "Držovice"],
    market:
      "Prostějovský trh se liší čtvrť od čtvrti: panelové byty v sídlištích, cihlové byty v centru a rodinné domy v okrajových částech a okolních obcích mají každý jiné kupující a jinou rychlost prodeje. Správná cena se proto nehledá z průměru města, ale z reálných prodejů ve vaší ulici.",
    tips: [
      "Cenu odvozujte z dokončených prodejů ve stejné čtvrti, ne z nabídkových cen na portálech.",
      "U rodinných domů rozhoduje stav střechy, topení a okolí; nechte si připravit podklady předem.",
      "Dobrá prezentace (fotografie, půdorys, video) zkracuje dobu prodeje u všech typů nemovitostí.",
    ],
    faq: [
      {
        q: "Kolik stojí prodej bytu v Prostějově?",
        a: "Cena závisí na čtvrti, dispozici, stavu a patře. Nejrychlejší cesta je nezávazný odhad: pošlete adresu a základní parametry a ozvu se s konkrétním číslem i strategií prodeje.",
      },
      {
        q: "Zajišťujete i okolní obce kolem Prostějova?",
        a: "Ano. Pracuji v celém prostějovském okrese a navazujících lokalitách Olomouckého kraje.",
      },
    ],
  },
  {
    slug: "olomouc",
    name: "Olomouc",
    region: "Olomoucký kraj",
    title: "Realitní makléř Olomouc",
    lead: "Olomouc je krajské a univerzitní město s trhem, který se chová jinak než okolní okresy. Pomohu vám prodat byt, dům nebo pozemek za cenu, kterou trh skutečně unese.",
    areas: ["centrum", "Nová Ulice", "Hodolany", "Neředín", "Holice", "Řepčín", "Svatý Kopeček"],
    market:
      "V Olomouci se potkávají investoři, rodiny i studenti a lidé s prací v krajském městě. Menší byty se proto prodávají jinak než velké rodinné domy. Důležité je správně zacílit nabídku na tu skupinu, která za vaši nemovitost zaplatí nejvíc.",
    tips: [
      "U menších bytů myslete na investory: ceny, nájemní potenciál a stav společných částí domu.",
      "U domů v okrajových částech a na Svatém Kopečku pracujte s lokalitou, výhledy a dostupností do centra.",
      "Připravte výpis z katastru, energetický štítek a podklady od SVJ ještě před zveřejněním inzerátu.",
    ],
    faq: [
      {
        q: "Prodáváte nemovitosti i v samotné Olomouci?",
        a: "Ano, Olomouc patří mezi hlavní lokality, ve kterých pracuji, včetně okolních obcí.",
      },
      {
        q: "Jak dlouho trvá prodej bytu v Olomouci?",
        a: "Záleží na ceně, stavu a lokalitě. Při správně nastavené ceně a kvalitní prezentaci obvykle řádově týdny až několik měsíců; konkrétní odhad dostanete při prohlídce.",
      },
    ],
  },
  {
    slug: "prerov",
    name: "Přerov",
    region: "Olomoucký kraj",
    title: "Realitní makléř Přerov",
    lead: "Přerov je důležitý dopravní uzel s vlastní dynamikou trhu. Prodej nemovitosti tady vyžaduje znalost místních čtvrtí i toho, kdo v nich kupuje.",
    areas: ["centrum", "Předmostí", "Henčlov", "Lověšice", "Čekyně"],
    market:
      "Přerov těží z dopravní dostupnosti, a tak se u něj mísí kupující z města i dojíždějící. Rozhoduje poloha vůči nádraží, občanské vybavenosti a stav domu, ve kterém byt leží.",
    tips: [
      "Zdůrazněte dopravní dostupnost: vlak, dálnice, dojezd do Olomouce a Ostravy.",
      "U bytů v panelových domech ukažte stav domu (zateplení, výtahy, fond oprav).",
      "Realistická cena hned na startu prodává lépe než „zkušební“ vysoká cena a postupné slevy.",
    ],
    faq: [
      {
        q: "Působíte i v Přerově?",
        a: "Ano, Přerov patří do mé hlavní oblasti působnosti spolu s Prostějovem, Olomoucí a Kroměřížskem.",
      },
      {
        q: "Mohu si nechat nemovitost v Přerově jen nezávazně ocenit?",
        a: "Samozřejmě. Odhad je nezávazný a bez povinnosti nemovitost prodávat.",
      },
    ],
  },
  {
    slug: "kromeriz",
    name: "Kroměříž",
    region: "Zlínský kraj",
    title: "Realitní makléř Kroměříž",
    lead: "Kroměříž s památkově chráněným centrem a zahradami je specifická lokalita. Pomohu vám prodat nemovitost tak, aby vynikla její poloha a kvalita bydlení.",
    areas: ["centrum", "Štěchovice", "Postoupky", "Těšnovice"],
    market:
      "Kroměříž láká kupující, kteří hledají klidné město s dobrou občanskou vybaveností a dostupností. Nabídka je menší než v krajských městech, proto na kvalitě prezentace a načasování záleží ještě víc.",
    tips: [
      "Pracujte s tím, co je pro kupující v Kroměříži typické: klidná lokalita, parky, zázemí města.",
      "U rodinných domů mějte připravenou dokumentaci a doklady o rekonstrukcích.",
      "Při menší nabídce se vyplatí kvalitní fotografie a rychlá reakce na první zájemce.",
    ],
    faq: [
      {
        q: "Prodáváte i v Kroměříži a okolí?",
        a: "Ano, Kroměřížsko je součástí oblasti, ve které pracuji.",
      },
      {
        q: "Jak probíhá spolupráce, když bydlím jinde?",
        a: "Většinu věcí zařídím na dálku, osobní setkání je potřeba hlavně při prohlídce a podpisu smluv.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
