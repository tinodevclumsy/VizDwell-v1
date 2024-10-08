import { configureStore } from "@reduxjs/toolkit";
import cameraSlice from "./features/camera/cameraSlice";
import menuSlice from "./features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    camera: cameraSlice,
    menu: menuSlice,
  },
});

export default store;
