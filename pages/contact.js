import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Name_and_Pic from '../components/name_and_pic'
import Contact_Info from '../components/contact_info'
import Return_Home from '../components/return_home'
import Footer from '../components/footer'
import Contact_Links from "../components/contact_links"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Priscella</title>
        {/* Add an icon in the tab with the code below 
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>

      <Name_and_Pic/>

      <Contact_Info/>

      <Contact_Links/>

      <br></br>

      {/* button to return home */}
      <Return_Home/>
        
      </main>

      <Footer/>
    </div>
  )
}
