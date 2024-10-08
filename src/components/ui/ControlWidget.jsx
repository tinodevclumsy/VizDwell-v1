import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const WidgetContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  z-index: 10;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
`;

const ControlWidget = () => {
  const [isFullscreen, setFullscreen] = useState(false);
  const onFullscrenClick = () => {
    if (!isFullscreen) {
      setFullscreen(true);
      document.documentElement.requestFullscreen();
      return;
    }

    document.exitFullscreen();
    setFullscreen(false);
  };
  return (
    <WidgetContainer>
      <FontAwesomeIcon
        onClick={onFullscrenClick}
        icon={isFullscreen ? faCompress : faExpand}
      />
    </WidgetContainer>
  );
};

export default ControlWidget;
