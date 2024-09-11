import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import PropertyModel from "./PropertyModel";
import { HemisphereLightHelper } from "three";

import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

const Camera = () => {
  return <PerspectiveCamera makeDefault fov={75} position={[0, 0, 3]} />;
};

const Light = () => {
  const lightRef = useRef();

  useHelper(lightRef, HemisphereLightHelper, 5);
  return (
    <hemisphereLight
      ref={lightRef}
      skyColor={"#fff"}
      groundColor={"#444"}
      intensity={3}
    />
  );
};

const Control = () => {
  const {
    enableDamping,
    dampingFactor,
    rotateSpeed,
    maxPolarAngle,
    minPolarAngle,
  } = useControls({
    enableDamping: { value: true },
    dampingFactor: { value: 0.1, min: 0, max: 1, step: 0.01 },
    rotateSpeed: { value: 1, min: 0.1, max: 5 },
    maxPolarAngle: { value: Math.PI / 2, min: 0, max: Math.PI },
    minPolarAngle: { value: 0, min: 0, max: Math.PI },
  });

  return (
    <OrbitControls
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
      rotateSpeed={rotateSpeed}
      maxPolarAngle={maxPolarAngle}
      minPolarAngle={minPolarAngle}
    />
  );
};

const PropertyCanvas = () => {
  return (
    <Canvas>
      <Perf position="top-left" />
      <Environment preset="sunset" background backgroundBlurriness={1} />
      <Camera />
      <Control />
      <Light />
      <PropertyModel />
    </Canvas>
  );
};

export default PropertyCanvas;
