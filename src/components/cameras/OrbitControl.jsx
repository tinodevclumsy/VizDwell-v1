import { forwardRef } from "react";
import { OrbitControls } from "@react-three/drei";
import ControlHelper from "../utils/ControlHelper";

const OrbitControlManager = forwardRef((_, ref) => {
  const { controlCtrl } = ControlHelper();

  return (
    <OrbitControls
      ref={ref}
      enableZoom={true}
      enableDamping={controlCtrl.enableDamping}
      dampingFactor={controlCtrl.dampingFactor}
      rotateSpeed={controlCtrl.rotateSpeed}
      maxPolarAngle={controlCtrl.maxPolarAngle}
      minPolarAngle={controlCtrl.minPolarAngle}
      minAzimuthAngle={controlCtrl.minAzimuthAngle}
      maxAzimuthAngle={controlCtrl.maxAzimuthAngle}
      maxDistance={controlCtrl.maxDistance}
    />
  );
});

OrbitControlManager.displayName = "Orbit Control";

export default OrbitControlManager;
