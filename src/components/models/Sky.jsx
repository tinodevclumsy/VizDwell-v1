import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import * as THREE from "three";
const SkyBackground = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.toneMapping = THREE.CineonToneMapping;
    gl.toneMappingExposure = 1.5;
  }, []);

  return (
    <>
      <Sky
        sunPosition={[0, 1.5, -10]} // 햇빛 위치
        distance={450000}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        elevation={2}
        turbidity={12} // 하늘의 탁도 (낮을수록 맑음)
        rayleigh={1} // 레일리 산란 (하늘색에 영향)
      />
    </>
  );
};

export default SkyBackground;
