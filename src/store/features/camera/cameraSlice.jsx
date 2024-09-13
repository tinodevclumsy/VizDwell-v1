import { createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    viewMode: "default",
  },
  reducers: {
    setCameraView: (state, action) => {
      state.viewMode = action.payload;
    },
  },
});
export const { setCameraView } = cameraSlice.actions;
export default cameraSlice.reducer;
