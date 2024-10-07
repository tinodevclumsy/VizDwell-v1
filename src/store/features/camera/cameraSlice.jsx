import { createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    viewMode: "DEFAULT",
    isMoving: false,
    isFrontView: true,
    isMovingToInside: false,
  },
  reducers: {
    setCameraView: (state, action) => {
      state.viewMode = action.payload;
    },
    setFrontView: (state, action) => {
      state.isFrontView = action.payload;
    },
    toggleMovementSide: (state) => {
      state.isMovingToInside = !state.isMovingToInside
    },
    toggleCameraMovement: (state) => {
      state.isMoving = !state.isMoving;
    },
  },
});
export const { setCameraView, toggleCameraMovement, setFrontView, toggleMovementSide } =
  cameraSlice.actions;
export default cameraSlice.reducer;
