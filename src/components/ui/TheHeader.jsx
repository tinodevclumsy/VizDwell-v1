import styled from "styled-components";

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
  z-index: 10;
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
      <Title>Vizdwell</Title>
    </Header>
  );
};

export default TheHeader;
