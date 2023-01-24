import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getFilterList } from "../../entities/filter/filter.model";
import { fetchTickets } from "../../entities/ticket/ticket.model";
import TicketCard from "../../entities/ticket/TicketCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../providers/ReduxProvider.types";
import "./style.css";

function TicketList() {
  const dispatch = useAppDispatch();

  const tickets = useAppSelector((state) => state.tickets.ticketList);
  const sortField = useAppSelector((state) => state.sorting.field);
  const filters = getFilterList();

  console.log(filters);

  const filteredData = filters.reduce((res, cb) => cb.filterCb(res), tickets);

  const sortedData = [...filteredData].sort(
    (a, b) => (a[sortField] as number) - (b[sortField] as number)
  );

  useEffect(() => {
    dispatch(fetchTickets(1));
  }, []);

  return (
    <div className="ticket-list">
      {sortedData?.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
