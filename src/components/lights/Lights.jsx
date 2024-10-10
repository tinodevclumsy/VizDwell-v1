import ControlHelper from "../utils/ControlHelper";
import { memo } from "react";
const Lights = () => {
  const { directionalLightCtl } = ControlHelper();
  const { visible, castShadow, position } = directionalLightCtl;
  const { x, y, z } = position;

  return (
    <>
      <hemisphereLight
        skyColor={"#ffd27f"}
        groundColor={"#444"}
        intensity={0.5}
      />
      <directionalLight
        visible={visible}
        position={[x, y, z]}
        color="#ffd27f"
        castShadow={castShadow}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
    </>
  );
};

export default memo(Lights);
