import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const BigCaption = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
`;

const SmallCaption = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  margin: 25px 0;
  text-align: center;
`;

export default function NotConnected() {
  return (
    <>
      <BigCaption>Mint tes $TREZEG sans plus attendre</BigCaption>
      <SmallCaption>
        Vérifie tout de suite si tu es éligible à l'airdrop TrezeguetCoin!
      </SmallCaption>
      <ConnectButton />
    </>
  );
}
