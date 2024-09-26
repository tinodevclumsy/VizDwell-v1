import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model/20240925-transformed.glb");

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
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
        position={[12.886, 4.894, 12.575]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.White}
        position={[-1.796, 17.29, 14.046]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials.PaletteMaterial004}
        position={[-16.009, 13, -4.447]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={
          nodes[
            "FamilyInstance_Casework_12_Casework_Counter_Top_EDR1_<632173_24"
          ].geometry
        }
        material={materials.PaletteMaterial001}
        position={[-8.123, 1, -20.023]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes[
            "FamilyInstance_Doors_MAHG_Suite_Door_Ext_Double_Sliding_<632075"
          ].geometry
        }
        material={materials.PaletteMaterial002}
        position={[-8.123, 1, -20.023]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes[
            "FamilyInstance_Plumbing_Fixtures_M_Tub-Rectangular-3D_<632156_M"
          ].geometry
        }
        material={materials.PaletteMaterial003}
        position={[-8.123, 1, -20.023]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Wall_Walls_<632022_iW2w_-_6"_WOOD_WALL<'].geometry}
        material={nodes['Wall_Walls_<632022_iW2w_-_6"_WOOD_WALL<'].material}
        position={[-8.123, 1, -20.023]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/model/20240925-transformed.glb");
