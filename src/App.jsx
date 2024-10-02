import TheHeader from "./components/ui/TheHeader";
import PropertyCanvas from "./components/PropertyCanvas";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TheHeader />
      <PropertyCanvas />
    </div>
  );
}

export default App;
