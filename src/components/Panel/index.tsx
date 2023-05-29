import styled from "styled-components";
``;
import { useAccount, useContractRead } from "wagmi";
import NotConnected from "./NotConnected";
import Whitelisted from "./Whitelisted";
import NotWhitelisted from "./NotWhitelisted";
import AlreadyMinted from "./AlreadyMinted";
import { ABI, ADDRESS } from "../../constants/contract";

const PresentationWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
`;

export default function Panel() {
  const { isConnected, address } = useAccount();
  const { data: isWhitelisted } = useContractRead({
    address: ADDRESS,
    abi: ABI,
    functionName: "whitelist",
    args: [address || "0x3AACC1D8B48031d128E487E3d7a38AD8C0Ed4693"],
  });
  const { data: hasMinted } = useContractRead({
    address: ADDRESS,
    abi: ABI,
    functionName: "hasMinted",
    args: [address || "0x3AACC1D8B48031d128E487E3d7a38AD8C0Ed4693"],
  });
  return (
    <PresentationWrapper>
      {!isConnected && <NotConnected />}
      {isConnected && (isWhitelisted as boolean) && (!hasMinted as boolean) && (
        <Whitelisted />
      )}
      {isConnected && (!isWhitelisted as boolean) && <NotWhitelisted />}
      {isConnected && (isWhitelisted as boolean) && (hasMinted as boolean) && (
        <AlreadyMinted />
      )}
    </PresentationWrapper>
  );
}
