import TheHeader from "./components/ui/TheHeader";
import PropertyCanvas from "./components/PropertyCanvas";
import "./App.css";
import { Leva } from 'leva'

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Leva hidden />
      <TheHeader />
      <div
        style={{
          position: "relative",
          width: "calc(100% - 50px)",
          height: "100%",
          marginLeft: "50px",
          background: "#1D2B41",
        }}
      >
        <PropertyCanvas />
      </div>
    </div>
  );
}

export default App;
