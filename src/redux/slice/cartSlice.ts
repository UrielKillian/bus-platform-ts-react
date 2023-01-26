import { createSlice } from "@reduxjs/toolkit";
import { ItemI } from "../../interfaces/models/item.interface";

export interface CounterState {
  cart: ItemI[];
}

const initialState: CounterState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart: any = state.cart.find(
        (item: ItemI) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item: ItemI) => item.id === action.payload);
      if (item !== undefined) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item: ItemI) => item.id === action.payload);
      if (item === undefined) return;
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(index);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
