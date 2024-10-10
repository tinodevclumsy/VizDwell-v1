import { useControls } from "leva";
import { VIEW_POSITIONS } from "../../config/viewPositions";

const ControlHelper = () => {
  const { x, y, z } = VIEW_POSITIONS.DEFAULT.position;
  const cameraCtl = useControls("PerspectiveCamera", {
    position: {
      x,
      y,
      z,
    },
  });

  const controlCtrl = useControls("OrbitControls", {
    enableDamping: { value: true },
    dampingFactor: { value: 0.1, min: 0, max: 1, step: 0.01 },
    rotateSpeed: { value: 1, min: 0.1, max: 5 },
    maxPolarAngle: { value: 1.57, min: 0, max: Math.PI },
    minPolarAngle: { value: 1, min: 0, max: Math.PI },
    minAzimuthAngle: { value: 0.5, min: -Math.PI, max: 2, step: 0.01 },
    maxAzimuthAngle: { value: 3.5, min: 0, max: Math.PI * 2, step: 0.01 },
    maxDistance: { value: 55, min: 0, max: 100, step: 1 },
    minDistance: { value: 24, min: 0, max: 100, step: 1 },
  });

  const directionalLightCtl = useControls("Directional Light", {
    visible: true,
    position: {
      x: 50,
      y: 28,
      z: 23,
    },
    castShadow: true,
  });

  return { cameraCtl, controlCtrl, directionalLightCtl };
};

export default ControlHelper;
