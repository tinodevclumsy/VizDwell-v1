import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
import { useSelector } from "react-redux";
import { useCameraView } from "../hooks/useCameraView";

const Camera = ({ viewMode }) => {
  const cameraRef = useRef();
  const { changeView } = useCameraView();

  useFrame(() => {
    if (viewMode === "interior" && cameraRef.current) {
      if (
        cameraRef.current.position.x > 2.5 &&
        cameraRef.current.position.y > 4 &&
        cameraRef.current.position.z < 2.5
      ) {
        cameraRef.current.position.x -= 0.1;
        cameraRef.current.position.y -= 0.1;
        cameraRef.current.position.z += 0.1;
      } else {
        changeView("default");
      }
    }
  });

  const cameraCtl = useControls("PerspectiveCamera", {
    position: {
      x: 15,
      y: 15,
      z: -12,
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
  const viewMode = useSelector((state) => state.camera.viewMode);
  return (
    <Canvas shadows gl={{ antialias: true }}>
      <Perf position="top-left" />
      <Environment preset="sunset" background backgroundBlurriness={1} />
      <Camera viewMode={viewMode} />
      <Control />
      <Light />
      <Model />
      <PropertyModel />
    </Canvas>
  );
};

export default PropertyCanvas;
