import React from 'react';
import Head from "next/head";
import { Directory } from "../components";
import { Headers } from "../components/Header/Header"



const Home = () => {
    return (
      <>
    <Head>
      <title>Solana Grant Finder</title>
        <meta name="Equity-free grants to support builders across the Solana ecosystem." content="Solana Grant Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     
          <Headers />
      
        
        <div >
          <Directory /> 
        </div>
    </>
    );
};

export default Home;