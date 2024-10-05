import { Html } from "@react-three/drei";
import { useSelector } from "react-redux";
import ViewButton from "./ViewButton";
import { useCameraView } from "../../hooks/useCameraView";
import theme from "../../utils/theme";
import { ThemeProvider } from "styled-components";

const SceneViewButtons = () => {
  const {toggleSide } = useCameraView();
  const viewMode = useSelector((state) => state.camera.viewMode);
  const isFrontView = useSelector((state) => state.camera.isFrontView);

  return (
    <>
      {viewMode === "DEFAULT" && isFrontView && (
        <Html position={[12, 0, -0.5]}>
          <ThemeProvider theme={theme}>
            <ViewButton onClick={toggleSide} />
          </ThemeProvider>
        </Html>
      )}
    </>
  );
};

export default SceneViewButtons;
