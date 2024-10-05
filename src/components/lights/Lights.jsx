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
        color="#ffd27f"
        castShadow={directionalLightCtl.castShadow}
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

export default Lights;
