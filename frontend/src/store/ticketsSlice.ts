import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { Filter, Ticket } from "../types/index.ts";

const currentFilter = {
  allTickets: "all",
  zeroStops: "0",
  oneStop: "1",
  twoStops: "2",
  threeStops: "3",
};
export const fetchTickets = createAsyncThunk<Ticket[], Filter[]>(
  "tickets/fetchAll",
  async (filters) => {
    try {
      const ticketsUrl = import.meta.env.VITE_API_TICKETS_URL;
      const fakeFilter = filters.find((filter) => filter.name === "allTickets");
      if (filters.length === 0 || fakeFilter) {
        const response = await axios.get(ticketsUrl);
        const tickets = response.data;
        return tickets as Ticket[];
      }
      const formattedStops = filters
        .map((filter) => currentFilter[filter.name as keyof typeof currentFilter])
        .filter(Boolean)
        .join(",");

      const queryString = `stops=${formattedStops}`;
      const response = await axios.get(`${ticketsUrl}?${queryString}`);
      const tickets = response.data;

      console.log(tickets);
      return tickets as Ticket[];
    }
    catch (e) {
      console.log('Не удалось загрузить билеты');
      return [] as Ticket[];
    }

  },
);

interface Tickets {
  state: "loading" | "finished";
  tickets: Ticket[];
}

const initialState: Tickets = { state: "loading", tickets: [] };
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.state = "finished";
      state.tickets = [...action.payload];
    });
  },
});

export default ticketsSlice.reducer;
