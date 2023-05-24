import { useQuery } from "@tanstack/react-query";
import getCurrency from "../modules/currency/api/getCurrency";

export const useCurrency = () => {
  const { data } = useQuery(
    ['getCurrency'],
    getCurrency
  );

  return data;
}
