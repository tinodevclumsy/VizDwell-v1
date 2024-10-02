import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { HemisphereLightHelper, DirectionalLightHelper } from "three";
import ControlHelper from "../utils/ControlHelper";

const Lights = () => {
  const hemisphereLightRef = useRef();
  const directionalLightRef = useRef();

  const { directionalLightCtl } = ControlHelper();

  useHelper(hemisphereLightRef, HemisphereLightHelper, 15);
  useHelper(directionalLightRef, DirectionalLightHelper, 5);

  return (
    <>
      <hemisphereLight
        ref={hemisphereLightRef}
        skyColor={"#fff"}
        groundColor={"#444"}
        intensity={1}
      />
      <directionalLight
        ref={directionalLightRef}
        visible={directionalLightCtl.visible}
        position={[
          directionalLightCtl.position.x,
          directionalLightCtl.position.y,
          directionalLightCtl.position.z,
        ]}
        castShadow={directionalLightCtl.castShadow}
        intensity={1}
        shadow-mapSize-width={1024} // Resolution of the shadow map
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default Lights;
