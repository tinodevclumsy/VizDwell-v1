import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useSelector } from "react-redux";
import { Model } from "./models/Model";
import Ground from "./models/Ground";
import SceneViewButtons from "./ui/SceneViewButtons";
import ExitButton from "./ui/ExitButton";
import Lights from "./lights/Lights";
import ViewWidget from "./ui/ViewWidget";
import LoadingFallback from "./ui/LoadingFallback";
import CameraController from "./cameras/CameraController";

const PropertyCanvas = () => {
  const viewMode = useSelector((state) => state.camera.viewMode);
  const isMoving = useSelector((state) => state.camera.isMoving);

  return (
    <>
      {viewMode !== "DEFAULT" && <ViewWidget viewMode={viewMode} />}
      <ExitButton viewMode={viewMode} isMoving={isMoving} />
      <Canvas shadows gl={{ antialias: true }}>
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
          <Perf position="bottom-right" />
          {/* <Environment preset="sunset" background backgroundBlurriness={1} /> */}
          <CameraController viewMode={viewMode} isMoving={isMoving} />
          <Lights />
          <Model />
          <Ground />
          <SceneViewButtons />
        </Suspense>
      </Canvas>
    </>
  );
};

export default PropertyCanvas;
