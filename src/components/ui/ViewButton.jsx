import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

const ViewBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  color:  ${({ theme }) => theme.colors.deem_white};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    display: block;
    position: absolute;
    z-index: -1;
    width: 150%;
    height: 150%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    content: "";
    animation: ${pulse} 1s infinite;
  }
`;

const ViewButton = ({ onClick }) => {
  return (
    <ViewBtn onClick={onClick}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </ViewBtn>
  );
};

export default ViewButton;
