import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import PropertyModel from "./PropertyModel";
import { HemisphereLightHelper, DirectionalLightHelper } from "three";

import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { Model } from "./model/Exterior";

const Camera = () => {
  const cameraCtl = useControls("PerspectiveCamera", {
    position: {
      x: 5,
      y: 8,
      z: 5,
    },
  });

  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      position={[
        cameraCtl.position.x,
        cameraCtl.position.y,
        cameraCtl.position.z,
      ]}
    />
  );
};

const Light = () => {
  const hemisphereLightRef = useRef();
  const directionalLightRef = useRef();

  useHelper(hemisphereLightRef, HemisphereLightHelper, 15);
  useHelper(directionalLightRef, DirectionalLightHelper, 5);

  const directionalCtl = useControls("Directional Light", {
    visible: true,
    position: {
      x: 15,
      y: 18,
      z: 15,
    },
    castShadow: true,
  });

  return (
    <>
      <hemisphereLight
        ref={hemisphereLightRef}
        skyColor={"#fff"}
        groundColor={"#444"}
        intensity={1}
      />
      <directionalLight
        ref={directionalLightRef}
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        castShadow={directionalCtl.castShadow}
        intensity={2}
        shadow-mapSize-width={1024} // Resolution of the shadow map
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

const Control = () => {
  const {
    enableDamping,
    dampingFactor,
    rotateSpeed,
    maxPolarAngle,
    minPolarAngle,
  } = useControls("OrbitControls", {
    enableDamping: { value: true },
    dampingFactor: { value: 0.1, min: 0, max: 1, step: 0.01 },
    rotateSpeed: { value: 1, min: 0.1, max: 5 },
    maxPolarAngle: { value: 1.3, min: 0, max: Math.PI },
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
    <Canvas shadows gl={{ antialias: true }}>
      <Perf position="top-left" />
      <Environment preset="sunset" background backgroundBlurriness={1} />
      <Camera />
      <Control />
      <Light />
      <Model />
      <PropertyModel />
    </Canvas>
  );
};

export default PropertyCanvas;
