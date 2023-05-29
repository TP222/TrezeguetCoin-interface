import Navbar from "./components/Navbar";
import Panel from "./components/Panel";

export default function App() {
  // const { address } = useAccount();
  // const { config } = usePrepareContractWrite({
  //   address: "0x1fFa492d080cE28b9e4Ba30ea21D6bE6EF6f711E",
  //   abi: Contract.abi,
  //   functionName: "mint",
  // });
  // const { write } = useContractWrite(config);

  return (
    <>
      <Navbar />
      <Panel />
    </>
  );
}
