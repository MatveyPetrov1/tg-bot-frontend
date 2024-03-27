import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    plusItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.title === action.payload.title
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.title === action.payload.title
      );
      if (findItem.count === 1) {
        state.items = state.items.filter((obj) => obj.title !== findItem.title);
      } else {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { plusItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
