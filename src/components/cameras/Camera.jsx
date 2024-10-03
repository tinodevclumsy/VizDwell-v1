import { forwardRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import ControlHelper from "../utils/ControlHelper";

const Camera = forwardRef((_, ref) => {
  const { cameraCtl } = ControlHelper();

  return (
    <PerspectiveCamera
      makeDefault
      ref={ref}
      fov={75}
      position={[
        cameraCtl.position.x,
        cameraCtl.position.y,
        cameraCtl.position.z,
      ]}
    />
  );
});

Camera.displayName = "Perpective Cammera";

export default Camera;
