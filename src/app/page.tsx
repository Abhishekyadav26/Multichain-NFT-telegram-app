"use client";
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { client } from "./client";
import NFTClaimer from "./components/NFTClaimer";


export default function Home() {
  const account = useActiveAccount();

  const flowContract = getContract({
    client: client,
    chain: defineChain(545),
    address: "0x7ed13c2c8f23d4c37BC6A9dBF1c0D65fd9eb73b6",
  });

  const mantleContract = getContract({
    client: client,
    chain: defineChain(5003),
    address: "0xb12dcB25A0B5d8087D67BEf55cA7C2aC60cC1f46",
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 cursor-pointer">
        Buy your Favourite
          <br />
           <span className="text-blue-700" >NFTs</span>
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
        />
        </div>
        <div className="flex flex-row">
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={flowContract}
          tokenId={0n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={mantleContract}
          tokenId={0n}
        />
        </div>
      </div>
    </main>
  );
}