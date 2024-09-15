import { createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    viewMode: "default",
    isMoving: false,
  },
  reducers: {
    setCameraView: (state, action) => {
      state.viewMode = action.payload;
    },
    toggleCameraMovement: (state) => {
      state.isMoving = !state.isMoving 
    }
  },
});
export const { setCameraView, toggleCameraMovement } = cameraSlice.actions;
export default cameraSlice.reducer;
