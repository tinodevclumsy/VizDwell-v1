import styled from "styled-components";
import { useCameraView } from "../hooks/useCameraView";

const WidgetContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #555;
  padding: 10px;
  border-radius: 10px;
  z-index: 10;
`;

const WidgetButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  margin: 5px 0;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
`;

import { CAMERA_POSITIONS } from "../config/cameraPositions";

const ViewWidget = () => {
  const { changeView } = useCameraView();

  return (
    <WidgetContainer>
      {Object.entries(CAMERA_POSITIONS).map(
        ([key, value], index) =>
          key !== "DEFAULT" && (
            <WidgetButton key={index} onClick={() => changeView(key)}>
              {value.name}
            </WidgetButton>
          )
      )}
    </WidgetContainer>
  );
};

export default ViewWidget;
