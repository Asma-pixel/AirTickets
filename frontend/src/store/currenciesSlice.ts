import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Currency } from "../types/index.ts";

interface CurrenciesState {
  state: "loading" | "finished";
  currencies: Currency[];
  selectedCurrency: Currency;
  isFetched: boolean;
}

const initialCurrencies: Currency[] = [
  { name: "RUB", rate: 1 },
  { name: "EUR", rate: 0 },
  { name: "USD", rate: 0 },
];

export const fetchCurrencies = createAsyncThunk<
  Partial<Record<string, number>>
>("currencies/fetchAll", async () => {
  if (import.meta.env.DEV) {
    return {
      EUR: 0.009187,
      USD: 0.009662,
      RUB: 1,
    };
  }
  const response = await axios.get("https://api.apilayer.com/fixer/latest", {
    headers: {
      apikey: import.meta.env.VITE_CURRENCY_API_KEY,
    },
    params: {
      base: "RUB",
      symbols: "EUR,USD,RUB",
    },
  });
  return response.data.rates;
});

const initialState: CurrenciesState = {
  state: "loading",
  currencies: initialCurrencies,
  selectedCurrency: initialCurrencies.find((i) => i.name === "RUB") as Currency,
  isFetched: false,
};

const currencySlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = state.currencies.find(
        (c: Currency) => c.name === action.payload,
      ) as Currency;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCurrencies.fulfilled,
      (state, action: PayloadAction<Partial<Record<string, number>>>) => {
        state.state = "finished";
        state.currencies.forEach((currency: Currency) => {
          if (action.payload[currency.name] !== undefined) {
            currency.rate = action.payload[currency.name]!;
          }
        });

        state.isFetched = true;
      },
    );
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
