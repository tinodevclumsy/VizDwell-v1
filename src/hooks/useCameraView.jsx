import { useDispatch, useSelector } from "react-redux";
import {
  setCameraView,
  toggleCameraMovement,
  setFrontView,
} from "../store/features/camera/cameraSlice";

export const useCameraView = () => {
  const dispatch = useDispatch();

  const viewMode = useSelector((state) => state.camera.view);

  const changeView = (v) => {
    dispatch(setCameraView(v));
    dispatch(toggleCameraMovement());
  };

  const changeIsFrontView = (v) => {
    dispatch(setFrontView(v));
  };

  return { viewMode, changeView, changeIsFrontView };
};
