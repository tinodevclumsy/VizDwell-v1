import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
// import { Perf } from "r3f-perf";
import { useSelector } from "react-redux";
import { Model } from "./models/Model";
import Ground from "./models/Ground";
import SceneViewButtons from "./ui/SceneViewButtons";
import ExitButton from "./ui/ExitButton";
import Lights from "./lights/Lights";
import ViewWidget from "./ui/ViewWidget";
import LoadingFallback from "./ui/LoadingFallback";
import CameraController from "./cameras/CameraController";
import SkyBackground from "./models/Sky";
import ControlWidget from "./ui/ControlWidget";

const PropertyCanvas = () => {
  const viewMode = useSelector((state) => state.camera.viewMode);
  const isMoving = useSelector((state) => state.camera.isMoving);
  const isMovingToInside = useSelector(
    (state) => state.camera.isMovingToInside
  );

  return (
    <>
      {viewMode !== "DEFAULT" && <ViewWidget viewMode={viewMode} />}
      <ExitButton viewMode={viewMode} isMoving={isMoving} />
      <ControlWidget />
      <Canvas shadows gl={{ antialias: true }}>
        <fog attach="fog" color="white" near={115} far={150} />
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoadingFallback />
            </Html>
          }
        >
          {/* <Perf position="bottom-right" /> */}
          <CameraController
            viewMode={viewMode}
            isMoving={isMoving}
            isMovingToInside={isMovingToInside}
          />
          <Lights />
          <Model />
          <Ground />
          <SceneViewButtons />
          <Environment
            files="./images/sky.hdr"
            background
            backgroundBlurriness={1}
          />
          <SkyBackground />
        </Suspense>
      </Canvas>
    </>
  );
};

export default PropertyCanvas;
