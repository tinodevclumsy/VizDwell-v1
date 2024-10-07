import HomeIcon from "../icons/Home";
import styled, { keyframes } from "styled-components";

const bgAnimation = keyframes`
  0% {
    height : 100%;
  }
  100% {
    height: 0;
  }
`;

const IconContainer = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;
`;

const IconOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1d2b41;
  z-index: 10;
  animation: ${bgAnimation} 0.5s ease-in-out infinite; 
`;
const Message = styled.p`
  text-transform: uppercase;
  margin-top: 10px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: #fff;
`;

const LoadingFallback = () => {
  return (
    <IconContainer>
      <IconWrapper>
        <HomeIcon />
        <IconOverlay />
      </IconWrapper>
      <Message>Constructing your view...</Message>
    </IconContainer>
  );
};

export default LoadingFallback;
