import React from "react";
import TableOfContents from "../components/table-of-contents";
import AppHeader from "../components/app-header";
import Wallet from "../components/wallet";
import WalletMethods from "../components/wallet-methods";
import SigningMethods from "../components/signing";
import SendTransaction from "../components/send-transaction";
import Erc20Tokens from "../components/erc20-tokens";
import SmartContracts from "../components/contracts";
import NFTs from "../components/nfts";
import Links from "../components/links";
import Spacer from "../components/ui/spacer";
import HomePageBackground from "../images/main.svg";

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Home({ setAccount }: Props) {
  return (
    <div
      className="home-page"
      style={{
        backgroundColor: "#ffe600"
      }}
    >
      <div>
        <AppHeader />
        <Spacer size={20} />
        <Links color="black" />
        <Spacer size={120} />
      </div>
      <Spacer size={200} />
      <TableOfContents />
      <div className="cards-container">
        <Wallet setAccount={setAccount} />
        <NFTs />
        <Spacer size={30} />
      </div>
    </div>
  );
}
