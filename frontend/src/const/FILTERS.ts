import { v4 } from "uuid";

import { Filter } from "../types/index.ts";

export default [
  { id: v4(), name: "allTickets", isActive: false },
  { id: v4(), name: "zeroStops", isActive: false },
  { id: v4(), name: "oneStop", isActive: false },
  { id: v4(), name: "twoStops", isActive: false },
  { id: v4(), name: "threeStops", isActive: false },
] as Filter[];
