import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    openMenu: false,
  },
  reducers: {
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const { setOpenMenu } = menuSlice.actions;
export default menuSlice.reducer;
