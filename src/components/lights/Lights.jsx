import ControlHelper from "../utils/ControlHelper";

const Lights = () => {
  const { directionalLightCtl } = ControlHelper();

  return (
    <>
      <hemisphereLight
        skyColor={"#ffd27f"}
        groundColor={"#444"}
        intensity={0.5}
      />
      <directionalLight
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
