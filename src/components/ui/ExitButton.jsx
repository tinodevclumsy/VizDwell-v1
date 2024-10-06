import styled, { keyframes } from "styled-components";
import { useCameraView } from "../../hooks/useCameraView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color:  ${({ theme }) => theme.colors.deem_white};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  &:before {
    display: block;
    position: absolute;
    z-index: -1;
    width: 135%;
    height: 135%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
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
    !isMoving && (
      <ExitBtnContainer>
        <ExitBtn onClick={() => changeView("DEFAULT")}>
          <FontAwesomeIcon icon={faXmark} />
        </ExitBtn>
      </ExitBtnContainer>
    )
  );
};

export default ExitButton;
