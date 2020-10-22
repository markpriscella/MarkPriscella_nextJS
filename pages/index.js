import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home_Buttons from "../components/home_buttons"
import Footer from "../components/footer"
import Name_and_Pic from "../components/name_and_pic"


export default function Home() {
  return (
    <div className={styles.container}>

      {/* BROWSER TAB */}
      <Head>
        <title>Mark Priscella</title>
        {/* Add an icon in the tab with the code below */}
        <link rel="icon" href="/img/favicon.ico?" /> 
      </Head>
      
      {/* PAGE BEGINS HERE */}
      <main>

        <Name_and_Pic/>

        <p className={styles.description}>
          {/* add a description under Name and Picture here */}
        </p>

        <Home_Buttons/>
      </main>
      
      <Footer/>
    </div>
  )
}
