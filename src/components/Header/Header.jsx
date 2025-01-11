

import React from 'react'
import styles from "./Header.module.scss"
import Head from "next/head";

import Link from 'next/link';
import SideBar from '../SideBar/sidebar';
import { Button } from '@mui/material';

const Header = () => {

  return <>
          <Head>
        <title>GameZone - Book Sports Venues Online</title>
        <meta name="description" content="Find and book sports venues online with PlaySpots." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
  <div className={styles.container}>
    <h3 className={styles.logo}>READY-SET-GO</h3>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        
        
      </ul>
    </nav>
    <div style={{display:"flex"}}>

    <Button className={styles.button} >Book Now</Button>
    <SideBar/>
    </div>
  </div>
</header>
  </>
}

export default Header
