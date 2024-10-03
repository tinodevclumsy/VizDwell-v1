import { useRef, useEffect } from "react";
import Camera from "./Camera";
import OrbitControlManager from "./OrbitControl";
import JEASINGS from "jeasings";
import { VIEW_POSITIONS } from "../../config/viewPositions";
import { useDispatch } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { toggleCameraMovement } from "../../store/features/camera/cameraSlice";
import { useCameraView } from "../../hooks/useCameraView";
import { Vector3 } from "three";

const CameraController = ({ viewMode, isMoving }) => {
  const cameraRef = useRef();
  const controlRef = useRef();

  const { changeIsFrontView, getViewBoundary } = useCameraView();
  const dispatch = useDispatch();

  useEffect(() => {
    // perspective camera
    if (cameraRef.current && isMoving) {
      console.log("aaaaa");
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
    // orbit control
    if (controlRef.current && isMoving) {
      new JEASINGS.JEasing(controlRef.current.target)
        .to(
          {
            x: VIEW_POSITIONS[viewMode].target.x,
            y: VIEW_POSITIONS[viewMode].target.y,
            z: VIEW_POSITIONS[viewMode].target.z,
          },
          500
        )
        .easing(JEASINGS.Cubic.Out)
        .start();
    }
  }, [viewMode, isMoving, dispatch]);

  useFrame(() => {
    // console.log("ctrl", controlRef.current.target);
    // console.log("cam", cameraRef.current.position);

    JEASINGS.update();

    if (viewMode !== "DEFAULT" && !isMoving) {
      const bounds = getViewBoundary(viewMode);
      if (!bounds.containsPoint(cameraRef.current.position)) {
        // clamp camera
        cameraRef.current.position.clamp(bounds.min, bounds.max);

        // make view point to center of room
        const targetPosition = new Vector3();
        bounds.getCenter(targetPosition);
        controlRef.current.target.lerp(targetPosition, 0.05); // 보간 속도 0.05
        controlRef.current.update();
      }
    }
    if (cameraRef.current.position.x < 5) {
      changeIsFrontView(false);
    } else {
      changeIsFrontView(true);
    }
  });
  return (
    <>
      <Camera ref={cameraRef} />
      <OrbitControlManager ref={controlRef} viewMode={viewMode} />
    </>
  );
};

export default CameraController;
