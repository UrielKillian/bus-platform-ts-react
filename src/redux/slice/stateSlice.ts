import { createSlice } from "@reduxjs/toolkit";
import { ItemI } from "../../interfaces/models/item.interface";

export interface CounterState {
  canBuy: Boolean;
}

const initialState: CounterState = {
  canBuy: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    canBuyToTrue: (state, action) => {
      state.canBuy = true;
    },
    canBuyToFalse: (state, action) => {
      state.canBuy = false;
    },
  },
});

export const stateReducer = stateSlice.reducer;
export const { canBuyToTrue, canBuyToFalse } = stateSlice.actions;
