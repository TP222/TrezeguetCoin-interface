import styled from "styled-components";
import Logo from "./Logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const TextLogo = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-left: 15px;
`;

export default function Navbar() {
  const { isConnected } = useAccount();
  return (
    <StyledNavbar>
      <LogoWrapper>
        <Logo />
        <TextLogo>TrezeguetCoin</TextLogo>
      </LogoWrapper>
      {isConnected && <ConnectButton />}
    </StyledNavbar>
  );
}
