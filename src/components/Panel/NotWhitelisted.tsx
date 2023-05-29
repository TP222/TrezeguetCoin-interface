import styled from "styled-components";

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

export default function NotWhitelisted() {
  return <BigCaption>Cette adresse n'es pas whitelistée</BigCaption>;
}
