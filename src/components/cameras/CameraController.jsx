import { useRef, useEffect, useCallback } from "react";
import Camera from "./Camera";
import OrbitControlManager from "./OrbitControl";
import JEASINGS from "jeasings";
import { VIEW_POSITIONS } from "../../config/viewPositions";
import { useDispatch } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { toggleCameraMovement } from "../../store/features/camera/cameraSlice";
import { useCameraView } from "../../hooks/useCameraView";
import { Vector3 } from "three";

const CameraController = ({
  viewMode,
  isMoving,
  isMovingToInside,
  isFrontView,
}) => {
  const cameraRef = useRef();
  const controlRef = useRef();
  const dispatch = useDispatch();
  const { changeIsFrontView, getViewBoundary, changeView, toggleSide } =
    useCameraView();

  const animateCamera = useCallback((target, duration, onComplete) => {
    new JEASINGS.JEasing(cameraRef.current.position)
      .to(target, duration)
      .easing(JEASINGS.Cubic.Out)
      .onComplete(onComplete)
      .start();
  }, []);

  const animateControl = useCallback((target, duration) => {
    new JEASINGS.JEasing(controlRef.current.target)
      .to(target, duration)
      .easing(JEASINGS.Cubic.Out)
      .start();
  }, []);

  useEffect(() => {
    // from outside to inside
    if (isMovingToInside) {
      animateCamera(
        {
          x: 54.996322411578845,
          y: 0.04379796909032789,
          z: 0.6345099994116014,
        },
        1000,
        () => {
          changeView("LIVING_ROOM");
          toggleSide();
        }
      );
    }
    // perspective camera
    if (cameraRef.current && isMoving && !isMovingToInside) {
      animateCamera(
        {
          x: VIEW_POSITIONS[viewMode].position.x,
          y: VIEW_POSITIONS[viewMode].position.y,
          z: VIEW_POSITIONS[viewMode].position.z,
        },
        750,
        () => {
          dispatch(toggleCameraMovement());
        }
      );
    }
    // orbit control
    animateControl(
      {
        x: VIEW_POSITIONS[viewMode].target.x,
        y: VIEW_POSITIONS[viewMode].target.y,
        z: VIEW_POSITIONS[viewMode].target.z,
      },
      500
    );
  }, [
    viewMode,
    isMoving,
    isMovingToInside,
    animateCamera,
    animateControl,
    changeView,
    toggleSide,
    dispatch,
  ]);

  useFrame(() => {
    // console.log("ctrl", controlRef.current.target);
    // console.log("cam", cameraRef.current.position);
    JEASINGS.update();

    if (
      viewMode !== "DEFAULT" &&
      !isMoving &&
      VIEW_POSITIONS[viewMode].boundary
    ) {
      const bounds = getViewBoundary(viewMode);
      if (!bounds.containsPoint(cameraRef.current.position)) {
        // clamp camera
        cameraRef.current.position.clamp(bounds.min, bounds.max);

        // make view point to center of room
        const targetPosition = new Vector3();
        bounds.getCenter(targetPosition);
        controlRef.current.target.lerp(targetPosition, 0.05);
        controlRef.current.update();
      }
    }

    const currentIsFrontView = cameraRef.current.position.x >= 5;
    if (isFrontView !== currentIsFrontView) {
      changeIsFrontView(currentIsFrontView);
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
