import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import "./assets/index.css";
import "./assets/reset.css";

const { chains, publicClient } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: import.meta.env.VITE_API_KEY as string }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "TrezeguetCoin",
  projectId: "TREZEGETCOIN",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
