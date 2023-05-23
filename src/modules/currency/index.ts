export interface CurrencyCard {
    id: string;
    image: string;
    name: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    symbol: string;
    ath: string;
    market_cap: string;
    market_cap_rank: string;
  }
  
  export type CurrencyCards = Array<CurrencyCard>