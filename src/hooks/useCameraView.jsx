import { useDispatch } from "react-redux";
import {
  setCameraView,
  toggleCameraMovement,
  toggleMovementSide,
  setFrontView,
} from "../store/features/camera/cameraSlice";
import { Box3, Vector3 } from "three";
import { VIEW_POSITIONS } from "../config/viewPositions";

export const useCameraView = () => {
  const dispatch = useDispatch();

  const changeView = (v) => {
    dispatch(toggleCameraMovement());
    dispatch(setCameraView(v));
  };

  const changeIsFrontView = (v) => {
    dispatch(setFrontView(v));
  };

  const toggleSide = () => {
    dispatch(toggleMovementSide());
  };

  const getViewBoundary = (mode) => {
    const { size, position } = VIEW_POSITIONS[mode].boundary;

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

  return { changeView, changeIsFrontView, getViewBoundary, toggleSide };
};
