export interface CurrencyCard {
    id: string;
    image: string;
    name: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    symbol: string;
    ath: number;
    market_cap: number;
    market_cap_rank: number;
  }
  
  export type CurrencyCards = Array<CurrencyCard>