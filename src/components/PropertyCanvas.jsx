import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useSelector } from "react-redux";
import { Model } from "./model/Model";
import Ground from "./model/Ground";
import SceneViewButtons from "./SceneViewButtons";
import ExitButton from "./common/ExitButton";
import Camera from "./Camera";
import Lights from "./Lights";
import Control from "./Control";
import ViewWidget from "./ViewWidget";
import LoadingFallback from "./LoadingFallback";

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
          <Environment preset="sunset" background backgroundBlurriness={1} />
          <Camera viewMode={viewMode} isMoving={isMoving} />
          <Control viewMode={viewMode} isMoving={isMoving} />
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
