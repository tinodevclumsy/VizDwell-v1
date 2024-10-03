import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model/20241001-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      position={[0, -26, 0]}
    >
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Brick}
        position={[12.886, 4.894, 12.547]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.White}
        position={[-1.796, 17.29, 14.046]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane009.geometry}
        material={materials.PaletteMaterial003}
        position={[-15.988, 13, -14.208]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Basic_Wall_iW2w_-_6"_WOOD_WALL_632022'].geometry}
        material={nodes['Basic_Wall_iW2w_-_6"_WOOD_WALL_632022'].material}
        scale={0.305}
      />
      <mesh
        geometry={nodes.Plane013.geometry}
        material={materials.Floor}
        position={[-14.031, 22.023, 1.907]}
      />
      <mesh
        geometry={nodes.Plane016.geometry}
        material={materials["Lighter Black"]}
        position={[0.614, 26.315, -10.521]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={3.61}
      />
      <mesh
        geometry={nodes.Plane015.geometry}
        material={materials["Black Line"]}
        position={[-4.809, 26.537, -14.535]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.831, 1.956, 1.956]}
      />
      <mesh
        geometry={nodes.Plane019.geometry}
        material={materials["Bedroom Floor"]}
        position={[-4.934, 22.037, -10.346]}
        scale={4.094}
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
          nodes["FamilyInstance_Furniture_M_Sofa-Corbu_<662053_Sofa<"].geometry
        }
        material={materials["Leather - SOFA"]}
        position={[-8.123, 1, -20.023]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes["FamilyInstance_Furniture_Table_-_Misc32_<632104_Table_-_Misc<"]
            .geometry
        }
        material={materials["WOOD TABLE"]}
        position={[-8.123, 1, -20.023]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Black Furniture"]}
        position={[-0.731, 23.38, -13.412]}
        scale={0.888}
      />
    </group>
  );
}

useGLTF.preload("/model/20241001-transformed.glb");