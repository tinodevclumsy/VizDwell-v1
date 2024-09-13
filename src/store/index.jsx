import { configureStore } from "@reduxjs/toolkit";
import cameraSlice from "./features/camera/cameraSlice";

export const store = configureStore({
  reducer: {
    camera: cameraSlice,
  },
});

export default store;
