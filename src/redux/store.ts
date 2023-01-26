import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slice/cartSlice";
import { stateReducer } from "./slice/stateSlice";
export const store = configureStore({
  reducer: cartReducer,
});
