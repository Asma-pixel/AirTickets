import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import FILTERS from "../const/FILTERS.ts";
import { Filter } from "../types/index.ts";

interface FiltersState {
  selectedFilters: Filter[];
}

const initialState: FiltersState = {
  selectedFilters: FILTERS,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterState(state, action: PayloadAction<string>) {
      const currentFilter = state.selectedFilters.find(
        (filter: Filter) => filter.name === action.payload,
      );
      if (currentFilter) {
        currentFilter.isActive = !currentFilter.isActive;
      }
    },

    setSingleFilter(state, action: PayloadAction<string>) {
      state.selectedFilters.forEach((filter: Filter) => {
        filter.isActive = filter.name === action.payload;
      });
    },
  },
});

export const { changeFilterState, setSingleFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
