import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "../../api/types";

const initialState: { type: string; field: keyof Ticket } = {
  type: "cheapest",
  field: "price",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortType: (
      state,
      action: PayloadAction<{ type: string; field: keyof Ticket }>
    ) => {
      state.type = action.payload.type;
      state.field = action.payload.field;
    },
  },
});

export const { setSortType } = sortSlice.actions;
