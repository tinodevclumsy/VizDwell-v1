import { forwardRef } from "react";
import { OrbitControls } from "@react-three/drei";
import ControlHelper from "../utils/ControlHelper";

const OrbitControlManager = forwardRef((props, ref) => {
  const { controlCtrl } = ControlHelper();
  const { viewMode } = props;

  return (
    <OrbitControls
      ref={ref}
      enableZoom={true}
      enableDamping={controlCtrl.enableDamping}
      dampingFactor={controlCtrl.dampingFactor}
      enableRotate={
        viewMode !== "BALCONY" && viewMode !== "KITCHEN" ? true : false
      }
      enablePan={
        viewMode !== "BALCONY" && viewMode !== "KITCHEN" ? true : false
      }
      rotateSpeed={controlCtrl.rotateSpeed}
      maxPolarAngle={controlCtrl.maxPolarAngle}
      minPolarAngle={controlCtrl.minPolarAngle}
      minAzimuthAngle={
        viewMode === "DEFAULT" ? controlCtrl.minAzimuthAngle : undefined
      }
      maxAzimuthAngle={
        viewMode === "DEFAULT" ? controlCtrl.maxAzimuthAngle : undefined
      }
      maxDistance={controlCtrl.maxDistance}
    />
  );
});

OrbitControlManager.displayName = "Orbit Control";

export default OrbitControlManager;
