import React from "react";
import styles from "./Header.module.css";
import Image from 'next/image'
import logo from "../../public/GrantSol.png"

export const Headers = () => {
  return (
    <header className={styles.header}>
      <Image
      className={styles.logo}
      src={logo}
      alt="Grantana Logo"
      width={100}
      height={100}
    />
      <p className={styles.description}>
      Equity-free grants to support builders across the Solana ecosystem.
      </p>
    </header>
  );
};

export default Headers;
