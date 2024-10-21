import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model/20241019-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      position={[-3, -26, -3]}
      receiveShadow
      castShadow
    >
      <group
        position={[-8.153, 1.007, -19.997]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <mesh
          geometry={nodes['iW2w_-_6"_WOOD_WALL'].geometry}
          material={materials.PaletteMaterial001}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes['iW2w_-_6"_WOOD_WALL_1'].geometry}
          material={nodes['iW2w_-_6"_WOOD_WALL_1'].material}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        geometry={
          nodes[
            "FamilyInstance_Doors_MAHG_Suite_Door_Ext_Double_Sliding_<632075"
          ].geometry
        }
        material={materials.PaletteMaterial002}
        position={[-8.153, 1.007, -19.997]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes['Wall_Walls_<632094_Generic_-_4"<'].geometry}
        material={materials.PaletteMaterial003}
        position={[-8.153, 1.007, -19.997]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={
          nodes["FamilyInstance_Furniture_M_Sofa-Corbu_<662053_Sofa<"].geometry
        }
        material={materials["Leather - SOFA"]}
        position={[-8.763, 23.1, 9.274]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={
          nodes["FamilyInstance_Furniture_Table_-_Misc32_<632104_Table_-_Mi"]
            .geometry
        }
        material={materials["WOOD TABLE"]}
        position={[-8.153, -9.024, -19.997]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials.White}
        position={[-1.796, 27.29, 14.132]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane013.geometry}
        material={materials.Floor}
        position={[-14.031, 22.023, 1.907]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane016.geometry}
        material={materials["Lighter Black"]}
        position={[0.601, 26.315, -10.521]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={3.61}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane015.geometry}
        material={materials["Black Line"]}
        position={[-4.809, 26.537, -14.535]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.831, 1.956, 1.956]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane019.geometry}
        material={materials["Bedroom Floor"]}
        position={[-4.934, 22.037, -10.346]}
        scale={4.094}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.Gloss}
        position={[-2.94, 23.023, 5.262]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials.Golden}
        position={[-2.854, 24.374, 5.307]}
        scale={[1, 0.302, 1]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Brick}
        position={[15.283, 2.007, 12.621]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Plane116.geometry}
        material={materials.Tile}
        position={[2.554, 22.058, -9.536]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.drawer_cabinet_drawer_01.geometry}
        material={materials["drawer_cabinet.001"]}
        position={[-0.01, 1.038, 6.367]}
        scale={1.525}
        receiveShadow
        castShadow
      />
      <group scale={4.52} receiveShadow castShadow>
        <mesh
          geometry={nodes.Cube092.geometry}
          material={materials.hanging_picture_frame_02_artwork}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Cube092_1.geometry}
          material={materials.PaletteMaterial004}
          receiveShadow
          castShadow
        />
      </group>
      <group
        position={[-10.279, 24.817, -0.165]}
        scale={2.397}
        receiveShadow
        castShadow
      >
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials.PaletteMaterial005}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials.PaletteMaterial006}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Black Furniture"]}
        position={[-0.731, 23.38, -13.412]}
        scale={0.888}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Frame.geometry}
        material={materials["Lamp Wood"]}
        position={[-8.763, 24.101, -14.161]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={3.867}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-0.426, 26.767, 12.581]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.044, 0.271, 0.044]}
        receiveShadow
        castShadow
      />
    </group>
  );
}

useGLTF.preload("/model/20241019-transformed.glb");
