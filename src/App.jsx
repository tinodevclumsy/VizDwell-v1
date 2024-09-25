import TheHeader from "./components/TheHeader";
import PropertyCanvas from "./components/PropertyCanvas";
import "./App.css";
import LoadingFallback from "./components/LoadingFallback";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TheHeader />
      <PropertyCanvas />
    </div>
  );
}

export default App;
