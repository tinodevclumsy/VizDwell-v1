import TheHeader from "./components/TheHeader";
import PropertyCanvas from "./components/PropertyCanvas";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TheHeader />
      <PropertyCanvas />
      {/* <LoadingFallback /> */}
    </div>
  );
}

export default App;
