import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model/20240924-transformed.glb");

  const modelCtl = useControls("model pos", {
    position: {
      x: 0,
      y: -26,
      z: 0,
    },
  });

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      position={[modelCtl.position.x, modelCtl.position.y, modelCtl.position.z]}
    >
      <mesh
        geometry={
          nodes[
            "FamilyInstance_Casework_12_Casework_Counter_Top_EDR1_<644682_24"
          ].geometry
        }
        material={materials.PaletteMaterial001}
        position={[-4.207, 1, -20.085]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={
          nodes[
            "FamilyInstance_Doors_MAHG_Suite_Door_Ext_Double_Sliding_<644597"
          ].geometry
        }
        material={materials.PaletteMaterial002}
        position={[-4.207, 1, -20.085]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes["Wall_Walls_<651102_Generic_-_6<"].geometry}
        material={materials["Wood Shake"]}
        position={[-4.207, 1, -20.085]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/model/20240924-transformed.glb");
