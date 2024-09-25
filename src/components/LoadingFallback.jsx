import HomeIcon from "./icons/Home";
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
  background-color: #fff;
  z-index: 10;
  animation: ${bgAnimation} .5s ease-in-out infinite; /* infinite로 애니메이션 반복 */
`;
const Message = styled.p`
  text-transform: uppercase;
  margin-top: 10px;
  font-weight: 600;
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
