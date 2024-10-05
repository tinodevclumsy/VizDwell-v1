import { Box } from "@react-three/drei";
import { useControls } from "leva";

const Boundary = () => {
  const ctrl = useControls("room", {
    size: {
      w: 9.5,
      h: 7,
      d: 9,
    },
    position: {
      x: 5,
      y: 1.2,
      z: 10,
    },
  });

  return (
    <Box
      args={[ctrl.size.w, ctrl.size.h, ctrl.size.d]}
      position={[ctrl.position.x, ctrl.position.y, ctrl.position.z]}
    >
      <meshStandardMaterial color="blue" wireframe />
    </Box>
  );
};

export default Boundary;
