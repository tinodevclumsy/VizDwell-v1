import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { HemisphereLightHelper, DirectionalLightHelper } from "three";

const Lights = () => {
  const hemisphereLightRef = useRef();
  const directionalLightRef = useRef();

  useHelper(hemisphereLightRef, HemisphereLightHelper, 15);
  useHelper(directionalLightRef, DirectionalLightHelper, 5);

  const directionalCtl = useControls("Directional Light", {
    visible: true,
    position: {
      x: 15,
      y: 18,
      z: 15,
    },
    castShadow: true,
  });

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
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        castShadow={directionalCtl.castShadow}
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
