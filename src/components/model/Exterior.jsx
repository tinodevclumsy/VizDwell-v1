import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes } = useGLTF("/model/exterior_wall-transformed.glb");
  return (
    <group {...props} dispose={null} position={[5.9, 0, 0]}>
      <mesh
        geometry={
          nodes["Basic_Wall_Exterior_-_Wood_Siding_on_Wood_Stud_587930"]
            .geometry
        }
        material={
          nodes["Basic_Wall_Exterior_-_Wood_Siding_on_Wood_Stud_587930"]
            .material
        }
        scale={0.305}
        castShadow
      />
      <instancedMesh
        args={[
          nodes['Fixed_with_Trim_36"_x_72"_600660_605050_Geometry'].geometry,
          nodes['Fixed_with_Trim_36"_x_72"_600660_605050_Geometry'].material,
          20,
        ]}
        instanceMatrix={
          nodes['Fixed_with_Trim_36"_x_72"_600660_605050_Geometry']
            .instanceMatrix
        }
      />
      <instancedMesh
        args={[
          nodes['Single-Flush_34"_x_80"_602587_602616_Geometry'].geometry,
          nodes['Single-Flush_34"_x_80"_602587_602616_Geometry'].material,
          5,
        ]}
        instanceMatrix={
          nodes['Single-Flush_34"_x_80"_602587_602616_Geometry'].instanceMatrix
        }
      />
    </group>
  );
}

useGLTF.preload("/model/exterior_wall-transformed.glb");
