import { memo } from "react";
import styled from "styled-components";
import { useCallback } from "react";
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

  @media (max-width: 768px) {
    left: unset;
    right: 10px;
    align-items: flex-end;
  }
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
  padding: 10px 20px;
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
  const { name: currentView } = VIEW_POSITIONS[viewMode];
  const onViewClick = useCallback(
    (key) => {
      changeView(key);
    },
    [changeView]
  );
  const filteredViewPositions = Object.entries(VIEW_POSITIONS).filter(
    ([key]) => key !== "DEFAULT"
  );

  return (
    <>
      <WidgetContainer>
        <WidgetTitle>
          <FontAwesomeIcon icon={faVideo} />
          <Title>Camera - {currentView}</Title>
        </WidgetTitle>
        <WidgetWrapper>
          {filteredViewPositions.map(
            ([key, value], index) =>
              key !== "DEFAULT" && (
                <WidgetButton
                  disabled={viewMode === key}
                  key={index}
                  onClick={() => onViewClick(key)}
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

export default memo(ViewWidget);
