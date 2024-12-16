import { useEffect } from "react";

import FilterForm from "./components/filterForm/FilterForm.tsx";
import TicketsPannel from "./components/ticketsPannel/TicketsPannel.tsx";
import { useAppDispatch } from "./hooks/useAppDispatch.tsx";
import { useAppSelector } from "./hooks/useAppSelector.tsx";
import AirplaneIcon from "./images/AirplaneIcon/AirplaneIcon.tsx";

import "./App.scss";
import { fetchCurrencies } from "./store/currenciesSlice.ts";

function App() {
  const dispatch = useAppDispatch();
  console.log(import.meta.env);
  const isFetched = useAppSelector(
    (state) => state.currenciesReducer.isFetched,
  );
  useEffect(() => {

    if (!isFetched) {
      dispatch(fetchCurrencies());
    }
  }, [isFetched, dispatch]);

  return (
    <>
      <div className="appContainer">
        <div className="iconContainer">
          {" "}
          <AirplaneIcon />
        </div>
        <div className="contentContainer">
          <FilterForm />
          <TicketsPannel />
        </div>
      </div>
    </>
  );
}

export default App;
