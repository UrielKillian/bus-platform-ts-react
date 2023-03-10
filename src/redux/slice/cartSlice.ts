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
    updateNameAndLastName: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index].name = action.payload.name;
      state.cart[index].lastName = action.payload.lastName;
    },
    canBuyToTrue: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index].canBuy = true;
    },
    canBuyToFalse: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index].canBuy = false;
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(index);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  updateNameAndLastName,
  canBuyToTrue,
  canBuyToFalse,
  removeItem,
} = cartSlice.actions;
