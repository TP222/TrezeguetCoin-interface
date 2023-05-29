import styled from "styled-components";
import { motion } from "framer-motion";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { ABI, ADDRESS } from "../../constants/contract";
import { MutatingDots } from "react-loader-spinner";

const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
`;

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

const MintButton = styled(motion.button)`
  background-color: #4e5ee4;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgb(0 0 0/8%);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  padding: 11px 25px;
  margin: 25px 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
  white-space: nowrap;
  cursor: pointer;
  border: none;
`;

export default function Whitelisted() {
  const { config } = usePrepareContractWrite({
    address: ADDRESS,
    abi: ABI,
    functionName: "mint",
  });
  const { write, status } = useContractWrite(config);
  return (
    <PresentationWrapper>
      {status === "idle" && (
        <>
          <BigCaption>
            T'es whitelisté bravo! Te voilà un vrai Trezeguet
          </BigCaption>
          <SmallCaption>
            Clique ici pour minter tes 10 000 000 $TREZEG
          </SmallCaption>
          <MintButton
            whileTap={{ scale: 0.9, transition: { duration: 0.01 } }}
            onClick={() => write?.()}
          >
            Minter
          </MintButton>
        </>
      )}
      {status === "loading" && (
        <>
          <BigCaption>Impression des $TREZEG</BigCaption>
          <SmallCaption>Veuillez patienter</SmallCaption>
          <MutatingDots
            height="100"
            width="100"
            color="#2a2a3a"
            secondaryColor="#2a2a3a"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </>
      )}
      {status === "success" && (
        <BigCaption>Félicitations, tes $TREZEG ont bien été minté!</BigCaption>
      )}
      {status === "error" && (
        <>
          <BigCaption>Il y a eu une erreur quelque part</BigCaption>
          <SmallCaption>Merci de réessayer</SmallCaption>
          <MintButton
            whileTap={{ scale: 0.9, transition: { duration: 0.01 } }}
            onClick={() => write?.()}
          >
            Minter
          </MintButton>
        </>
      )}
    </PresentationWrapper>
  );
}
