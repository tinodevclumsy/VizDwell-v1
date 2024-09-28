import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import JEASINGS from "jeasings";
import { VIEW_POSITIONS } from "../config/viewPositions";

const Control = ({ viewMode, isMoving }) => {
  const controlRef = useRef();

  const {
    enableDamping,
    dampingFactor,
    rotateSpeed,
    maxPolarAngle,
    minPolarAngle,
    minAzimuthAngle,
    maxAzimuthAngle,
    maxDistance,
  } = useControls("OrbitControls", {
    enableDamping: { value: true },
    dampingFactor: { value: 0.1, min: 0, max: 1, step: 0.01 },
    rotateSpeed: { value: 1, min: 0.1, max: 5 },
    maxPolarAngle: { value: 1.57, min: 0, max: Math.PI },
    minPolarAngle: { value: 1, min: 0, max: Math.PI },
    minAzimuthAngle: { value: 0.5, min: -Math.PI, max: 2, step: 0.01 },
    maxAzimuthAngle: { value: 3.5, min: 0, max: Math.PI * 2, step: 0.01 },
    maxDistance: { value: 55, min: 0, max: 100, step: 1 },
  });

  useEffect(() => {
    if (controlRef.current && isMoving) {
      // console.log(VIEW_POSITIONS[viewMode].control.maxDistance)
      // set max distance
      controlRef.current.maxDistance = VIEW_POSITIONS[viewMode].control.maxDistance
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
    console.log("ctrl", controlRef.current.target);
  });

  return (
    <OrbitControls
      ref={controlRef}
      // enablePan={false}
      enableZoom={true}
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
      rotateSpeed={rotateSpeed}
      maxPolarAngle={maxPolarAngle}
      minPolarAngle={minPolarAngle}
      minAzimuthAngle={minAzimuthAngle}
      maxAzimuthAngle={maxAzimuthAngle}
      maxDistance={maxDistance}
    />
  );
};

export default Control;
