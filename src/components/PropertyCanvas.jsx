import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { HemisphereLightHelper, DirectionalLightHelper } from "three";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { useDispatch, useSelector } from "react-redux";
import { Model } from "./model/Exterior";
import Ground from "./model/Ground";
import SceneViewButtons from "./SceneViewButtons";
import { toggleCameraMovement } from "../store/features/camera/cameraSlice";
import ExitButton from "./common/ExitButton";
import { CAMERA_POSITIONS } from "../config/cameraPositions";

const Camera = ({ viewMode, isMoving }) => {
  const cameraRef = useRef();
  const dispatch = useDispatch();

  useFrame(() => {
    if (viewMode === "interior" && cameraRef.current && isMoving) {
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

    if (viewMode === "default" && cameraRef.current && isMoving) {
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
      // CAMERA_POSITIONS.DEFAULT.position.x
    }
  });

  const cameraCtl = useControls("PerspectiveCamera", {
    position: {
      x: 16.66727556654493,
      y: 15.624022372761212,
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
        intensity={1}
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
      enableZoom={true}
    />
  );
};

const PropertyCanvas = () => {
  const viewMode = useSelector((state) => state.camera.viewMode);
  const isMoving = useSelector((state) => state.camera.isMoving);

  return (
    <>
      <ExitButton viewMode={viewMode} isMoving={isMoving} />
      <Canvas shadows gl={{ antialias: true }}>
        <Perf position="top-left" />
        <Environment preset="sunset" background backgroundBlurriness={1} />
        <Camera viewMode={viewMode} isMoving={isMoving} />
        <Control />
        <Light />
        <Model />
        <Ground />
        <SceneViewButtons />
      </Canvas>
    </>
  );
};

export default PropertyCanvas;
