import { TypedUseSelectorHook, useSelector } from "react-redux";

import type { RootState } from "../store/index.ts";

// Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
