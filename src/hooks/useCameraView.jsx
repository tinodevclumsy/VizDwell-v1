import { useDispatch, useSelector } from "react-redux";
import { setCameraView, toggleCameraMovement } from "../store/features/camera/cameraSlice";

export const useCameraView = () => {
  const dispatch = useDispatch();

  const viewMode = useSelector((state) => state.camera.view);

  const changeView = (v) => {
    dispatch(setCameraView(v));
    dispatch(toggleCameraMovement());
  };

  return { viewMode, changeView };
};
