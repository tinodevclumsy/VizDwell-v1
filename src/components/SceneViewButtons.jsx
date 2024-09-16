import { Html } from "@react-three/drei";
import { useSelector } from "react-redux";
import ViewButton from "./common/ViewButton";
import { useCameraView } from "../hooks/useCameraView";

const SceneViewButtons = () => {
  const { changeView } = useCameraView();
  const viewMode = useSelector((state) => state.camera.viewMode);

  return (
    <>
      {viewMode !== "interior" && (
        <Html position={[6, 7, -0.5]}>
          <ViewButton onClick={() => changeView("interior")} />
        </Html>
      )}
    </>
  );
};

export default SceneViewButtons;
