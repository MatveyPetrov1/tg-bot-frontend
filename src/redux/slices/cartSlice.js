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
      const findItem = state.items.find((obj) => {
        let same = true;
        if (state.items.length > 0 && action.payload.siropArray) {
          for (let i = 0; i < obj.siropArray.length; i++) {
            if (action.payload.siropArray[i] !== obj.siropArray[i]) {
              same = false;
            }
          }
        }
        return (
          obj.title === action.payload.title &&
          obj.sizeIndex === action.payload.sizeIndex &&
          obj.price === action.payload.price &&
          obj.sugarCount === action.payload.sugarCount &&
          same
        );
      });
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    minusCartItem(state, action) {
      const findItem = state.items.find((obj) => {
        let same = true;
        if (action.payload.siropArray) {
          for (let i = 0; i < obj.siropArray.length; i++) {
            if (obj.siropArray[i] !== action.payload.siropArray[i]) {
              same = false;
            }
          }
        }
        return (
          obj.title === action.payload.title &&
          obj.sizeIndex === action.payload.sizeIndex &&
          obj.sugarCount === action.payload.sugarCount &&
          same
        );
      });

      if (findItem.count === 1) {
        state.items = state.items.filter((obj) => {
          let same = true;
          if (findItem.siropArray) {
            for (let i = 0; i < obj.siropArray.length; i++) {
              if (findItem.siropArray[i] !== obj.siropArray[i]) {
                same = false;
              }
            }
          }

          return (
            obj.title !== findItem.title ||
            obj.sizeIndex !== findItem.sizeIndex ||
            obj.sugarCount !== findItem.sugarCount ||
            !same
          );
        });
      } else {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => {
        return (
          obj.title === action.payload.title &&
          obj.sizeIndex === action.payload.sizeIndex
        );
      });

      if (findItem.count === 1) {
        state.items = state.items.filter((obj) => {
          return (
            obj.title !== findItem.title || obj.sizeIndex !== findItem.sizeIndex
          );
        });
      } else {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    deleteAllItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { plusItem, minusItem, deleteAllItems, minusCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
