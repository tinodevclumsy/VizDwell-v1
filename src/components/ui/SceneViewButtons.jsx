import { Html } from "@react-three/drei";
import ViewButton from "./ViewButton";
import { useCameraView } from "../../hooks/useCameraView";
import theme from "../../utils/theme";
import { ThemeProvider } from "styled-components";

const SceneViewButtons = () => {
  const { toggleSide } = useCameraView();

  return (
    <Html position={[12, 0, -0.5]}>
      <ThemeProvider theme={theme}>
        <ViewButton onClick={toggleSide} />
      </ThemeProvider>
    </Html>
  );
};

export default SceneViewButtons;
