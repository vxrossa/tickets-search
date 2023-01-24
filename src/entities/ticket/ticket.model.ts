import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ticketApi } from "../../api/ticketApi";
import { Ticket } from "../../api/types";
import { RootState } from "../../providers/ReduxProvider.types";

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (page: number) => {
    const data = await ticketApi.getTickets({ page });

    return data;
  }
);

export const ticketListSlice = createSlice<{ ticketList: Ticket[] }, {}>({
  name: "tickets",
  initialState: {
    ticketList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.ticketList = action.payload;
    });
  },
});

export const getCompanyList = () =>
  useSelector(
    (state: RootState) =>
      new Set(state.tickets.ticketList.map((ticket) => ticket.company))
  );
