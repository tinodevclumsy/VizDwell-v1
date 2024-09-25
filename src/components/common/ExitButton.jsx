import styled, { keyframes } from "styled-components";
import { useCameraView } from "../../hooks/useCameraView";

const pulse = keyframes`
  from {
    transform: scale(1);
    opacity: .4;
  }
  to {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const ExitBtnContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: auto;
  padding: 25px 15px;
  display: flex;
  justify-content: center;
  z-index: 10;
  transform: translateX(-50%);
`;

const ExitBtn = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(
    to bottom,
    #fff 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.3);
  border: 1px solid #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  &:before {
    display: block;
    position: absolute;
    z-index: -1;
    width: 150%;
    height: 150%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0;
    content: "";
  }

  &:hover::before {
    animation: ${pulse} 1s infinite;
  }
`;

const ExitButton = ({ viewMode, isMoving }) => {
  const { changeView } = useCameraView();

  return (
    viewMode !== "DEFAULT" &&
    viewMode !== "BALCONY" &&
    !isMoving && (
      <ExitBtnContainer>
        <ExitBtn onClick={() => changeView("DEFAULT")}>EXIT</ExitBtn>
      </ExitBtnContainer>
    )
  );
};

export default ExitButton;
