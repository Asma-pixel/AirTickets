import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/index.ts";

export const useAppDispatch: () => AppDispatch = useDispatch;
