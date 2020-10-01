import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Priscella</title>
        {/* Add an icon in the tab with the code below 
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Resume
        </h1>

        <p className={styles.description}>
          {/* add a description under Mark Priscella here */}
        </p>

        <div className={styles.cardProfile}>
          <img src='/mark_resume.png' />
        </div>
        
        <a href="/"  className={styles.card}>
          <div>
            <h3>Return Home</h3>
            <p></p>
          </div>
        </a>>
        
      </main>

      <footer className={styles.footer}>
        <a>
          Created by Mark Priscella using nextJS
        </a>
      </footer>
    </div>
  )
}
