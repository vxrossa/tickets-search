import { configureStore } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { filterSlice } from "../entities/filter/filter.model";
import { ticketListSlice } from "../entities/ticket/ticket.model";
import { sortSlice } from "../features/sort-tickets/sort.model";

export const store = configureStore({
  reducer: {
    tickets: ticketListSlice.reducer,
    sorting: sortSlice.reducer,
    filters: filterSlice.reducer,
  },
  middleware: (def) =>
    def({
      serializableCheck: false,
    }),
});

function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
