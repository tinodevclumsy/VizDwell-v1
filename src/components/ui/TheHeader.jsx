import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "../../hooks/useMenu";
import { useSelector } from "react-redux";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 10px;
  z-index: 11;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${(props) =>
      props.$isopen ? "translateX(0)" : "translateX(-50px)"};
  }
`;

const Logo = styled.div`
  max-width: 75px;
`;

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  font-size: 25px;
  font-weight: 500;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  letter-spacing: 1px;
  margin-top: 5px;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  color: #fff;
  padding: 20px 20px;
  z-index: 10;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileCloseMenu = styled.div`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: ${(props) => (props.$isopen ? "block" : "none")};

  @media (min-width: 769px) {
    display: none !important;
  }
`;

const BottomNav = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 5px;
`;

const SocialMediaLink = styled.a`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  margin-top: 5px;

  :first-child {
    margin-bottom: 2px;
  }

  span {
    font-size: 8px;
    margin-top: 3px;
  }
`

const TheHeader = () => {
  const { changeOpenMenu } = useMenu();
  const isOpenMenu = useSelector((state) => state.menu.openMenu);

  return (
    <>
      <Header $isopen={isOpenMenu}>
        <Logo>
          <img
            style={{ maxWidth: "100%" }}
            src="/images/logos/w_logo.png"
            alt="Vizdwell - Logo"
          />
        </Logo>
        <MobileCloseMenu
          $isopen={isOpenMenu}
          onClick={() => changeOpenMenu(false)}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </MobileCloseMenu>
        <BottomNav>
          <SocialMediaLink href="https://github.com/tinodevclumsy/VizDwell-v1" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/in/seungjun-martin-lee-tinodevclumsy/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>DEV</span>
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/in/jun-park-84713b249/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>MODELING</span>
          </SocialMediaLink>
          <Title>Vizdwell</Title>
        </BottomNav>
      </Header>
      <MobileMenu onClick={() => changeOpenMenu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </MobileMenu>
    </>
  );
};

export default TheHeader;
