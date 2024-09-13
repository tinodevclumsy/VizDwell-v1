import { useDispatch, useSelector } from "react-redux";
import { setCameraView } from "../store/features/camera/cameraSlice";

export const useCameraView = () => {
  const dispatch = useDispatch();

  const viewMode = useSelector((state) => state.camera.view);

  const changeView = (v) => {
    // eslint-disable-next-line no-undef
    dispatch(setCameraView(v));
  };

  return { viewMode, changeView };
};
