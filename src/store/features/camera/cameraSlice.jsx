import { createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    viewMode: "default",
    isMoving: false,
    isFrontView: true,
  },
  reducers: {
    setCameraView: (state, action) => {
      state.viewMode = action.payload;
    },
    setFrontView: (state, action) => {
      state.isFrontView = action.payload;
    },
    toggleCameraMovement: (state) => {
      state.isMoving = !state.isMoving;
    },
  },
});
export const { setCameraView, toggleCameraMovement, setFrontView } =
  cameraSlice.actions;
export default cameraSlice.reducer;
