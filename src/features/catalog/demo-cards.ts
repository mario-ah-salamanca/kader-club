export type DemoCard = {
  id: string;
  playerName: string;
  club: string;
  league: string;
  season: string;
  setName: string;
  manufacturer: string;
  cardNumber: string;
  parallel: string;
  rarity: string;
  position: string;
  estimatedValueEur: number;
  valueTrend: "up" | "flat" | "down";
  confidence: "High" | "Medium" | "Early";
  tradeStatus: "not_for_trade" | "open_to_offers" | "actively_trading";
  accent: "mint" | "gold" | "blue" | "rose";
};

export const demoCards: DemoCard[] = [
  {
    id: "haaland-topps-chrome-gold",
    playerName: "Erling Haaland",
    club: "Manchester City",
    league: "Premier League",
    season: "2023/24",
    setName: "Topps Chrome UEFA",
    manufacturer: "Topps",
    cardNumber: "UCC-17",
    parallel: "Gold Refractor",
    rarity: "/50",
    position: "ST",
    estimatedValueEur: 420,
    valueTrend: "up",
    confidence: "Medium",
    tradeStatus: "not_for_trade",
    accent: "gold"
  },
  {
    id: "bellingham-merlin-rookie",
    playerName: "Jude Bellingham",
    club: "Real Madrid",
    league: "La Liga",
    season: "2023/24",
    setName: "Topps Merlin Heritage",
    manufacturer: "Topps",
    cardNumber: "MH-09",
    parallel: "Aqua Speckle",
    rarity: "/199",
    position: "CM",
    estimatedValueEur: 260,
    valueTrend: "up",
    confidence: "High",
    tradeStatus: "open_to_offers",
    accent: "mint"
  },
  {
    id: "musiala-bundesliga-sapphire",
    playerName: "Jamal Musiala",
    club: "Bayern München",
    league: "Bundesliga",
    season: "2022/23",
    setName: "Topps Chrome Sapphire Bundesliga",
    manufacturer: "Topps",
    cardNumber: "BS-42",
    parallel: "Sapphire",
    rarity: "Short Print",
    position: "AM",
    estimatedValueEur: 185,
    valueTrend: "flat",
    confidence: "High",
    tradeStatus: "actively_trading",
    accent: "blue"
  },
  {
    id: "wirtz-finest-green",
    playerName: "Florian Wirtz",
    club: "Bayer Leverkusen",
    league: "Bundesliga",
    season: "2023/24",
    setName: "Topps Finest",
    manufacturer: "Topps",
    cardNumber: "F-22",
    parallel: "Green Wave",
    rarity: "/99",
    position: "AM",
    estimatedValueEur: 145,
    valueTrend: "up",
    confidence: "Medium",
    tradeStatus: "open_to_offers",
    accent: "mint"
  },
  {
    id: "yamal-select-silver",
    playerName: "Lamine Yamal",
    club: "Barcelona",
    league: "La Liga",
    season: "2023/24",
    setName: "Panini Select",
    manufacturer: "Panini",
    cardNumber: "S-11",
    parallel: "Silver",
    rarity: "Rookie",
    position: "RW",
    estimatedValueEur: 390,
    valueTrend: "up",
    confidence: "Early",
    tradeStatus: "not_for_trade",
    accent: "rose"
  }
];

export const dashboardCards = demoCards.slice(0, 3);

export function formatCurrencyEur(value: number) {
  return new Intl.NumberFormat("en-DE", {
    currency: "EUR",
    maximumFractionDigits: 0,
    style: "currency"
  }).format(value);
}

export function formatTradeStatus(status: DemoCard["tradeStatus"]) {
  return status.replaceAll("_", " ");
}

export function formatCatalogSummary(card: DemoCard) {
  return [
    card.club,
    card.season,
    card.manufacturer,
    card.setName,
    card.parallel
  ].join(" · ");
}
