import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import config from "../abi.json";
import { useIsMounted } from "../hooks/useIsMounted";
import { ethers } from "ethers";
import {
  useContract,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";

const Home: NextPage = () => {
  const contractAddress = "0xBf073fA4abE4Dc40A382FD3Ed95Ca2804B5049b3";
  
  // const contractAddress = "0x9dAb98C3990A3C1508aeDed4dEc6330Acf456599";

  const { connector: activeConnector, isConnected } = useAccount();
  const mounted = useIsMounted();


  const { config: deposit } = usePrepareContractWrite({
    address: contractAddress,
    abi: config.abi,
    functionName: 'deposit',
    overrides: {
      value: ethers.utils.parseEther("0.000000000000000001"), 
    },
  })

  const { write: depositWr } = useContractWrite(deposit)

  const handleDeposit = async () => {
    try {
      console.log("deposit called");
      await depositWr?.();
    } catch (error) {
      console.log(error);
    }
  };

  const { config: withdraw } = usePrepareContractWrite({
    address: contractAddress,
    abi: config.abi,
    functionName: 'withdraw',
  })

  const { write: withdrawWr } = useContractWrite(withdraw)

  const handleWithdraw = async () => {
    try {
      console.log("withdraw called");
      await withdrawWr?.();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>

      {mounted && isConnected ? (

        <main className={styles.main}>
          <button
            className="button"
            onClick={handleDeposit}>Deposit</button>
          <button
            className="button"
            onClick={handleWithdraw}>Withdraw</button>
        </main>
      ) : (

        <p className={styles.title}>
          Please connect your wallet to continue.
        </p>
      )}
    </div>

  )
};

export default Home;
