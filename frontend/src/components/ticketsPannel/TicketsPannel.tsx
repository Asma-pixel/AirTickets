import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "../../hooks/useAppDispatch.tsx";
import { useAppSelector } from "../../hooks/useAppSelector.tsx";
import { fetchTickets } from "../../store/ticketsSlice.ts";
import { Ticket } from "../../types/index.ts";

import TicketCard from "./TicketCard.tsx";
import styles from "./TicketsPannel.module.scss";
import Filter from "../../types/Filter.ts";

const TicketsPannel = () => {
  const tickets = useAppSelector((state) => state.ticketsReducer.tickets);
  const dispatch = useAppDispatch();
  const filters = useAppSelector(
    (state) => state.filtersReducer.selectedFilters,
  );
  useEffect(() => {
    const loadTickets = async () => {
      const activeFilters = filters.filter((filter: Filter) => filter.isActive);
      await dispatch(fetchTickets(activeFilters)).unwrap();
    };

    loadTickets();
  }, [dispatch, filters]);

  return tickets.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.ticketsContainer}>
      {tickets.map((ticket: Ticket) => (
        <TicketCard key={uuidv4()} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketsPannel;
