import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const { nodes } = useGLTF("/model/exterior-transformed.glb");

  const modelCtl = useControls("model pos", {
    position: {
      x: 2,
      y: -6,
      z: 5,
    },
  });

  return (
    <group
      {...props}
      dispose={null}
      position={[modelCtl.position.x, modelCtl.position.y, modelCtl.position.z]}
    >
      <mesh
        geometry={
          nodes['Basic_Wall_eW1wi_-_6"_EXTERIOR_WOOD_WALL_632022'].geometry
        }
        material={
          nodes['Basic_Wall_eW1wi_-_6"_EXTERIOR_WOOD_WALL_632022'].material
        }
        // position={[1.241, -0.957, -4.392]}
        scale={0.305}
        rotation={[0, Math.PI, 0]}
        castShadow
      />
    </group>
  );
}

useGLTF.preload("/model/exterior-transformed.glb");
