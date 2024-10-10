import { forwardRef, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import ControlHelper from "../utils/ControlHelper";

const OrbitControlManager = forwardRef((props, ref) => {
  const { controlCtrl } = ControlHelper();
  const { viewMode } = props;

  const isDefaultView = useMemo(() => viewMode === "DEFAULT", [viewMode]);
  const isBalconyOrKitchen = useMemo(
    () => viewMode !== "BALCONY" && viewMode !== "KITCHEN",
    [viewMode]
  );
  
  const {
    enableDamping,
    dampingFactor,
    rotateSpeed,
    maxPolarAngle,
    minPolarAngle,
    minAzimuthAngle,
    maxAzimuthAngle,
    maxDistance,
    minDistance,
  } = controlCtrl;

  return (
    <OrbitControls
      ref={ref}
      enableZoom={true}
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
      enableRotate={isBalconyOrKitchen}
      enablePan={isBalconyOrKitchen}
      rotateSpeed={rotateSpeed}
      maxPolarAngle={maxPolarAngle}
      minPolarAngle={minPolarAngle}
      minAzimuthAngle={isDefaultView ? minAzimuthAngle : undefined}
      maxAzimuthAngle={isDefaultView ? maxAzimuthAngle : undefined}
      maxDistance={maxDistance}
      minDistance={isDefaultView ? minDistance : 0}
    />
  );
});

OrbitControlManager.displayName = "Orbit Control";

export default OrbitControlManager;
