import { Currency } from "../types/index.ts";

const convertCurrency = (amount: number, currency: Currency): number => {
  if (currency.name === "RUB") return amount;
  return amount * currency.rate;
};

export default convertCurrency;
