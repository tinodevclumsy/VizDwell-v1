import { Html } from "@react-three/drei";
import { useSelector } from "react-redux";
import ViewButton from "./common/ViewButton";
import { useCameraView } from "../hooks/useCameraView";
import theme from "../utils/theme";
import { ThemeProvider } from "styled-components";

const SceneViewButtons = () => {
  const { changeView } = useCameraView();
  const viewMode = useSelector((state) => state.camera.viewMode);
  const isFrontView = useSelector((state) => state.camera.isFrontView);

  return (
    <>
      {viewMode !== "interior" && isFrontView && (
        <Html position={[4.6, 1.0, -0.5]}>
          <ThemeProvider theme={theme}>
            <ViewButton onClick={() => changeView("interior")} />
          </ThemeProvider>
        </Html>
      )}
    </>
  );
};

export default SceneViewButtons;
