import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Return_Home from '../components/return_home'
import Profile_Photo from '../components/profile_photo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Priscella</title>
        {/* Add an icon in the tab with the code below */}
        <link rel="icon" href="/img/favicon.ico?" /> 
      </Head>

      <main className={styles.main}>

        <Profile_Photo/>
        <h1 className={styles.title}>
          Resume
        </h1>

        <div className={styles.cardProfile}>
          <img src='/img/mark_resume.png' />
        </div>
        
        <Return_Home/>
        
      </main>

      <Footer/>
    </div>
  )
}
