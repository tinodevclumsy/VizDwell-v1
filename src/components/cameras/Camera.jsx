import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { VIEW_POSITIONS } from "../../config/viewPositions";
import { useDispatch } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { toggleCameraMovement } from "../../store/features/camera/cameraSlice";
import { useCameraView } from "../../hooks/useCameraView";
import JEASINGS from "jeasings";
import ControlHelper from "../utils/ControlHelper";

const Camera = ({ viewMode, isMoving }) => {
  const cameraRef = useRef();
  const dispatch = useDispatch();
  const { changeIsFrontView, getViewBoundary } = useCameraView();
  const { cameraCtl } = ControlHelper();

  useEffect(() => {
    if (cameraRef.current && isMoving) {
      new JEASINGS.JEasing(cameraRef.current.position)
        .to(
          {
            x: VIEW_POSITIONS[viewMode].position.x,
            y: VIEW_POSITIONS[viewMode].position.y,
            z: VIEW_POSITIONS[viewMode].position.z,
          },
          500
        )
        .easing(JEASINGS.Cubic.Out)
        .onComplete(() => {
          dispatch(toggleCameraMovement());
        })
        .start();
    }
  }, [viewMode, isMoving, dispatch]);

  useFrame(() => {
    // console.log("cam", cameraRef.current.position);
    JEASINGS.update();

    if (viewMode !== "DEFAULT" && !isMoving) {
      const bounds = getViewBoundary(viewMode);

      if (!bounds.containsPoint(cameraRef.current.position)) {
        cameraRef.current.position.clamp(bounds.min, bounds.max);
      }
    }
    if (cameraRef.current.position.x < 5) {
      changeIsFrontView(false);
    } else {
      changeIsFrontView(true);
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={cameraRef}
      fov={75}
      position={[
        cameraCtl.position.x,
        cameraCtl.position.y,
        cameraCtl.position.z,
      ]}
    />
  );
};

export default Camera;
