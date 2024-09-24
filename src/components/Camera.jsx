import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { CAMERA_POSITIONS } from "../config/cameraPositions";
import { useDispatch } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { toggleCameraMovement } from "../store/features/camera/cameraSlice";
import { useControls } from "leva";
// import { useCameraView } from "../hooks/useCameraView";
import JEASINGS from "jeasings";

const Camera = ({ viewMode, isMoving }) => {
  const cameraRef = useRef();
  const dispatch = useDispatch();
  // const { changeIsFrontView } = useCameraView();

  useEffect(() => {
    console.log("updated", viewMode);
    if (cameraRef.current && isMoving) {
      new JEASINGS.JEasing(cameraRef.current.position)
        .to(
          {
            x: CAMERA_POSITIONS[viewMode].position.x,
            y: CAMERA_POSITIONS[viewMode].position.y,
            z: CAMERA_POSITIONS[viewMode].position.z,
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
    console.log('cam', cameraRef.current.position);
    JEASINGS.update();
    // if (cameraRef.current.position.x < 5) {
    //   console.log("remove view button");
    //   changeIsFrontView(false);
    // } else {
    //   changeIsFrontView(true);
    // }
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
