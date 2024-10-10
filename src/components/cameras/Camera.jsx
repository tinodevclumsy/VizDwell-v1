import { forwardRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import ControlHelper from "../utils/ControlHelper";

const Camera = forwardRef((_, ref) => {
  const { cameraCtl } = ControlHelper();
  const { x, y, z } = cameraCtl.position;
  return (
    <PerspectiveCamera makeDefault ref={ref} fov={75} position={[x, y, z]} />
  );
});

Camera.displayName = "Perpective Cammera";

export default Camera;
