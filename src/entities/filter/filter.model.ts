import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Ticket } from "../../api/types";
import { RootState } from "../../providers/ReduxProvider.types";

interface Filter {
  type: string;
  filterCb: (tickets: Ticket[]) => Ticket[];
}

// Формат фильтров:
/** 
 *  {
      filterCb: (tickets: Ticket[]) =>
        tickets.filter((ticket) => ticket.company === "Pobeda Airlines"),
      type: "company",
    },
 */

export const filterAdapter = createEntityAdapter<Filter>({
  selectId: (item) => item.type,
});

export const filterSelectors = filterAdapter.getSelectors(
  (state: RootState) => state.filters
);

export const getFilterList = () => useSelector(filterSelectors.selectAll);

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterAdapter.getInitialState(),
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      filterAdapter.setOne(state, action.payload);
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      filterAdapter.removeOne(state, action.payload);
    },
  },
});

export const { setFilter, removeFilter } = filterSlice.actions;
