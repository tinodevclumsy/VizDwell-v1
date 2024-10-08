import TheHeader from "./components/ui/TheHeader";
import PropertyCanvas from "./components/PropertyCanvas";
import "./App.css";
import { Leva } from "leva";
import ReactGA from "react-ga4";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Scene = styled.div`
  position: relative;
  width: calc(100% - 50px);
  height: 100%;
  transform: translate(50px);
  background: #1d2b41;
  transition: transform 0.3s ease, width 0.3s ease;

  @media (max-width: 768px) {
    width: ${(props) => (props.$ismenuopen ? " calc(100% - 50px)" : "100%")};
    transform: ${(props) =>
      props.$ismenuopen ? "translateX(50px)" : "translateX(0)"};
  }
`;

function App() {
  const isOpenMenu = useSelector((state) => state.menu.openMenu);
  ReactGA.initialize("G-EED4BSJSQY");
  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Leva hidden />
      <TheHeader />
      <Scene $ismenuopen={isOpenMenu}>
        <PropertyCanvas />
      </Scene>
    </div>
  );
}

export default App;
