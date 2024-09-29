import { Box } from "@react-three/drei";
import { useControls } from "leva";

const Boundary = () => {
  const ctrl = useControls("room", {
    size: {
      w: 11,
      h: 7,
      d: 16,
    },
    position: {
      x: 9,
      y: 1.2,
      z: -5,
    },
  });

  return (
    <Box
      args={[ctrl.size.w, ctrl.size.h, ctrl.size.d]}
      position={[ctrl.position.x, ctrl.position.y, ctrl.position.z]}
    >
      <meshStandardMaterial color="blue" wireframe />{" "}
    </Box>
  );
};

export default Boundary;
