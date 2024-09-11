import { Canvas } from "@react-three/fiber";
import PropertyModel from "./PropertyModel";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

const Camera = () => {
  return <PerspectiveCamera makeDefault fov={75} position={[0, 0, 3]} />;
};

const Control = () => {
  return <OrbitControls />;
};

const PropertyCanvas = () => {
  return (
    <Canvas>
      <Perf position="top-left" />
      <Environment preset="sunset" background backgroundBlurriness={1} />
      <Camera />
      <Control />
      <PropertyModel />
    </Canvas>
  );
};

export default PropertyCanvas;
