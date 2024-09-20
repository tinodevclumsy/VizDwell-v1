import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { CAMERA_POSITIONS } from "../config/cameraPositions";
import { useDispatch } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { toggleCameraMovement } from "../store/features/camera/cameraSlice";
import { useControls } from "leva";
import { useCameraView } from "../hooks/useCameraView";
import JEASINGS from "jeasings";

const Camera = ({ viewMode, isMoving }) => {
  const cameraRef = useRef();
  const dispatch = useDispatch();
  const { changeIsFrontView } = useCameraView();

  useEffect(() => {
    console.log("updated");
    // update view - intial interior
    if (
      viewMode === CAMERA_POSITIONS.INTERIOR.name &&
      cameraRef.current &&
      isMoving
    ) {
      new JEASINGS.JEasing(cameraRef.current.position)
        .to(
          {
            x: CAMERA_POSITIONS.INTERIOR.position.x,
            y: CAMERA_POSITIONS.INTERIOR.position.y,
            z: CAMERA_POSITIONS.INTERIOR.position.z,
          },
          500
        )
        .easing(JEASINGS.Cubic.Out)
        .onComplete(() => {
          dispatch(toggleCameraMovement());
        })
        .start();
    }

    // update view - back to default view
    if (
      viewMode === CAMERA_POSITIONS.DEFAULT.name &&
      cameraRef.current &&
      isMoving
    ) {
      new JEASINGS.JEasing(cameraRef.current.position)
        .to(
          {
            x: CAMERA_POSITIONS.DEFAULT.position.x,
            y: CAMERA_POSITIONS.DEFAULT.position.y,
            z: CAMERA_POSITIONS.DEFAULT.position.z,
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
    // console.log(cameraRef.current.position);
    JEASINGS.update();
    if (cameraRef.current.position.x < 5) {
      console.log("remove view button");
      changeIsFrontView(false);
    } else {
      changeIsFrontView(true);
    }
  });

  const cameraCtl = useControls("PerspectiveCamera", {
    position: {
      x: CAMERA_POSITIONS.DEFAULT.position.x,
      y: CAMERA_POSITIONS.DEFAULT.position.y,
      z: CAMERA_POSITIONS.DEFAULT.position.z,
    },
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
