import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import ViewButton from "../common/ViewButton";
import { useCameraView } from "../../hooks/useCameraView";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model/exterior-transformed.glb");
  const { changeView } = useCameraView();

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[0, 0.5, 0]}
          scale={-5.9}
          castShadow
        />
      </group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -5.9, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <Html position={[-5.9 / 2, 0, 0]}>
        <ViewButton onClick={() => changeView("interior")} />
      </Html>
    </>
  );
}

useGLTF.preload("/model/exterior-transformed.glb");
