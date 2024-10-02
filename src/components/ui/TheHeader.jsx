import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 15px;
  z-index: 10;
`;

const Logo = styled.div`
  max-width: 75px;
`;

const TheHeader = () => {
  return (
    <Header>
      <Logo>
        <img
          style={{ maxWidth: "100%" }}
          src="/images/logos/w_logo.png"
          alt="Vizdwell - Logo"
        />
      </Logo>
    </Header>
  );
};

export default TheHeader;
