import { Canvas } from "@react-three/fiber";
import PropertyModel from "./PropertyModel";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const Camera = () => {
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      position={[0, 0, 3]}
    />
  );
};

const Control = () => {
    return <OrbitControls />
}

const PropertyCanvas = () => {
  return (
    <Canvas>
      <Camera />
      <Control />
      <PropertyModel />
    </Canvas>
  );
};

export default PropertyCanvas;
