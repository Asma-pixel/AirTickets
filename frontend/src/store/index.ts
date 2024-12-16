import { configureStore } from "@reduxjs/toolkit";

import currenciesReducer from "./currenciesSlice.ts";
import filtersReducer from "./filtersSlice.ts";
import ticketsReducer from "./ticketsSlice.ts";

const store = configureStore({
  reducer: {
    ticketsReducer,
    filtersReducer,
    currenciesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
