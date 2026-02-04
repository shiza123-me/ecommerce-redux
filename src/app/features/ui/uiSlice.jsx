import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    openSearch: (state) => {
      state.isSearchOpen = true;
    },
    closeSearch: (state) => {
      state.isSearchOpen = false;
    },
  },
});

export const { toggleSearch, openSearch, closeSearch } = uiSlice.actions;
export default uiSlice.reducer;
