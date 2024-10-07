import styled from "styled-components";
import { useCameraView } from "../../hooks/useCameraView";
import { VIEW_POSITIONS } from "../../config/viewPositions";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  z-index: 10;
`;

const WidgetWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.deem_white};
`;

const WidgetButton = styled.button`
  width: 100%;
  background: transparent;
  color: #fff;
  /* margin: 5px 0; */
  padding: 10px 20px;
  /* border-radius: 5px; */
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #666;
    cursor: not-allowed;
  }
`;

const WidgetTitle = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  padding-bottom: 10px;
`;

const Title = styled.h5`
  margin-left: 7px;
  font-weight: 400;
  text-transform: capitalize;
`;

const ViewWidget = ({ viewMode }) => {
  const { changeView } = useCameraView();

  return (
    <>
      <WidgetContainer>
        <WidgetTitle>
          <FontAwesomeIcon icon={faVideo} />
          <Title>Camera - {VIEW_POSITIONS[viewMode].name}</Title>
        </WidgetTitle>
        <WidgetWrapper>
          {Object.entries(VIEW_POSITIONS).map(
            ([key, value], index) =>
              key !== "DEFAULT" && (
                <WidgetButton
                  disabled={viewMode === key}
                  key={index}
                  onClick={() => changeView(key)}
                >
                  {value.name}
                </WidgetButton>
              )
          )}
        </WidgetWrapper>
      </WidgetContainer>
    </>
  );
};

export default ViewWidget;
