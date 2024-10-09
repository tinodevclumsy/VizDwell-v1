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

const SceneContainer = ({ children }) => {
  const isOpenMenu = useSelector((state) => state.menu.openMenu);

  return <Scene $ismenuopen={isOpenMenu}>{children}</Scene>;
};

export default SceneContainer;
