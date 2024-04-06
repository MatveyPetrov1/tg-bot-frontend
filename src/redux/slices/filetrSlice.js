import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  category: 0,
  sortBy: "",
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchValue, setCategory, setSort } = searchSlice.actions;
export default searchSlice.reducer;
