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

      <img src="/MarkProfile.png" alt="Mark's Profile Photo" 
        className={styles.ProfilePic}/>

        <h1 className={styles.title}>
          Mark Priscella
        </h1>

        <p className={styles.description}>
          {/* add a description under Mark Priscella here */}
          markpriscella@gmail.com <br></br>
          Cell: 508-561-0188 <br></br>
          Home: 508-651-3527
        </p>


        <table>
          <a  
          href="https://www.linkedin.com/in/mark-priscella/">
            <img src='/linkedin_icon.png' 
                alt="LinkedIn Icon"
                width="200p"
                ></img> 
          </a>

          <a  
          href="https://github.com/markpriscella">
            <img src='/github_icon.png' 
                alt="Github Icon"
                width="200p"
                ></img> 
          </a>

        </table>

        <br></br>

        <a href="/"  className={styles.card}>
          <div>
            <h3>Return Home</h3>
            <p></p>
          </div>
        </a>
        
      </main>

      <footer className={styles.footer}>
        <a>
          Created by Mark Priscella using nextJS
        </a>
      </footer>
    </div>
  )
}
