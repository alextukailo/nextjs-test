import { type CurrencyCards } from "../..";

const getCurrency = async (): Promise<CurrencyCards | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/coins/markets?vs_currency=USD`)
  const data = await res.json();

  return data;
}

export default getCurrency;
