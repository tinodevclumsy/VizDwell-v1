import TheHeader from "./components/ui/TheHeader";
import PropertyCanvas from "./components/PropertyCanvas";
import "./App.css";
import { Leva } from "leva";
import ReactGA from "react-ga4";
import SceneContainer from "./components/ui/SceneCotainer";

function App() {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("G-EED4BSJSQY");
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Leva hidden />
      <TheHeader />
      <SceneContainer>
        <PropertyCanvas />
      </SceneContainer>
    </div>
  );
}

export default App;
