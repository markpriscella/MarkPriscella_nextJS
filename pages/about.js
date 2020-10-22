import Head from 'next/head'
import React from "react"
import Profile_Photo from '../components/profile_photo'
import About_Text from '../components/about_text'
import Return_Home from '../components/return_home'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Mark Priscella</title>
        {/* Add an icon in the tab with the code below 
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>

        <Profile_Photo/>

        {/* text under profile photo */}
        <h1 className={styles.title}>
          About Me
        </h1>

        <About_Text/>
        
        {/* button to return home */}
        <Return_Home/>
      </main>

      <Footer/>
    </div>
  )
}