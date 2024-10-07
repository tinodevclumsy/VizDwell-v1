import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import * as THREE from "three";
const SkyBackground = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1;
  }, []);

  return (
    <>
      <Sky
        sunPosition={[0, 1.5, -10]}
        distance={450000}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        elevation={2}
        turbidity={12} 
        rayleigh={1} 
      />
    </>
  );
};

export default SkyBackground;
