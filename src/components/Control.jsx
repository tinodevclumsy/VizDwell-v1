import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const Control = () => {
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
    minAzimuthAngle: { value: 0.5, min: -Math.PI, max: 2, step: 0.01 }, // -45도
    maxAzimuthAngle: { value: 3.5, min: 0, max: Math.PI * 2, step: 0.01 }, // 45도
    maxDistance: { value: 17, min: 0, max: 100, step: 1 },
  });

  return (
    <OrbitControls
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
      rotateSpeed={rotateSpeed}
      maxPolarAngle={maxPolarAngle}
      minPolarAngle={minPolarAngle}
      enableZoom={true}
      minAzimuthAngle={minAzimuthAngle}
      maxAzimuthAngle={maxAzimuthAngle}
      maxDistance={maxDistance}
    />
  );
};

export default Control;
