import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SFML_Project from '../components/sfml_project'
import Airdrop_Project from '../components/airdrop_project'
import Create_a_Date from '../components/create_a_date'
import Return_Home from '../components/return_home'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Priscella</title>
        {/* Add an icon in the tab with the code below 
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* page content begins here */}
      <main className={styles.main}>

        {/* page header */}
        <h1 className={styles.title}>
          Projects
        </h1>

        {/* page description if needed */}
        <p className={styles.description}>
          {/* add a description under Mark Priscella here */}
        </p>

        <SFML_Project/>

        <Airdrop_Project/>

        <Create_a_Date/>
        
        <Return_Home/>

      </main>

      <Footer/>
      </div>
  )
}
