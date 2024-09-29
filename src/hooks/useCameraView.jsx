import { useDispatch, useSelector } from "react-redux";
import {
  setCameraView,
  toggleCameraMovement,
  setFrontView,
} from "../store/features/camera/cameraSlice";
import { Box3, Vector3 } from "three";
import { VIEW_POSITIONS } from "../config/viewPositions";

export const useCameraView = () => {
  const dispatch = useDispatch();

  const viewMode = useSelector((state) => state.camera.viewMode);

  const changeView = (v) => {
    dispatch(setCameraView(v));
    dispatch(toggleCameraMovement());
  };

  const changeIsFrontView = (v) => {
    dispatch(setFrontView(v));
  };

  const getViewBoundary = () => {
    console.log(viewMode)
    const { size, position } = VIEW_POSITIONS[viewMode].boundary;

    const roomBounds = new Box3(
      new Vector3(
        position.x - size.w / 2,
        position.y - size.h / 2,
        position.z - size.d / 2
      ),
      new Vector3(
        position.x + size.w / 2,
        position.y + size.h / 2,
        position.z + size.d / 2
      )
    );

    return roomBounds;
  };

  return { viewMode, changeView, changeIsFrontView, getViewBoundary };
};
