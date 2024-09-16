import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { CAMERA_POSITIONS } from "../config/cameraPositions";
import { useDispatch } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { toggleCameraMovement } from "../store/features/camera/cameraSlice";
import { useControls } from "leva";

const Camera = ({ viewMode, isMoving }) => {
  const cameraRef = useRef();
  const dispatch = useDispatch();

  useFrame(() => {
    if (
      viewMode === CAMERA_POSITIONS.INTERIOR.name &&
      cameraRef.current &&
      isMoving
    ) {
      let done = 0;

      if (cameraRef.current.position.x > 5.1) {
        cameraRef.current.position.x -= 0.1;
      } else {
        done++;
      }

      if (cameraRef.current.position.y > 7.4) {
        cameraRef.current.position.y -= 0.1;
      } else {
        done++;
      }

      if (cameraRef.current.position.z < -0.7) {
        cameraRef.current.position.z += 0.1;
      } else {
        done++;
      }

      if (done === 3) {
        dispatch(toggleCameraMovement());
      }
    }

    if (
      viewMode === CAMERA_POSITIONS.DEFAULT.name &&
      cameraRef.current &&
      isMoving
    ) {
      let done = 0;
      if (cameraRef.current.position.x < CAMERA_POSITIONS.DEFAULT.position.x) {
        cameraRef.current.position.x += 0.1;
      } else {
        done++;
      }

      if (cameraRef.current.position.y < CAMERA_POSITIONS.DEFAULT.position.y) {
        cameraRef.current.position.y += 0.1;
      } else {
        done++;
      }

      if (cameraRef.current.position.z < CAMERA_POSITIONS.DEFAULT.position.z) {
        cameraRef.current.position.z += 0.1;
      } else {
        done++;
      }

      if (done === 3) {
        dispatch(toggleCameraMovement());
      }
    }
  });

  const cameraCtl = useControls("PerspectiveCamera", {
    position: {
      x: CAMERA_POSITIONS.DEFAULT.position.x,
      y: CAMERA_POSITIONS.DEFAULT.position.y,
      z: -11.673199871357799,
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
