import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import JEASINGS from "jeasings";
import { VIEW_POSITIONS } from "../../config/viewPositions";
import ControlHelper from "../utils/ControlHelper";

const OrbitControlManager = ({ viewMode, isMoving }) => {
  const controlRef = useRef();
  const { controlCtrl } = ControlHelper();

  useEffect(() => {
    if (controlRef.current && isMoving) {
      // console.log(VIEW_POSITIONS[viewMode].control.maxDistance)
      // set max distance
      controlRef.current.maxDistance =
        VIEW_POSITIONS[viewMode].control.maxDistance;
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
  }, [viewMode, isMoving]);

  useFrame(() => {
    // console.log("ctrl", controlRef.current.target);
  });

  return (
    <OrbitControls
      ref={controlRef}
      // enablePan={false}
      enableZoom={true}
      enableDamping={controlCtrl.enableDamping}
      dampingFactor={controlCtrl.dampingFactor}
      rotateSpeed={controlCtrl.rotateSpeed}
      maxPolarAngle={controlCtrl.maxPolarAngle}
      minPolarAngle={controlCtrl.minPolarAngle}
      minAzimuthAngle={controlCtrl.minAzimuthAngle}
      maxAzimuthAngle={controlCtrl.maxAzimuthAngle}
      maxDistance={controlCtrl.maxDistance}
    />
  );
};

export default OrbitControlManager;
