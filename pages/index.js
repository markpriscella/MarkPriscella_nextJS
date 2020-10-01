import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      {/* what you see in the broswer's tab */}
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
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About Me {/* add an icon with the following code &rarr; */} </h3>
            <p>Find out more about me!</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h3>Projects</h3>
            <p>Various Programming Projects</p>
          </a>

          <a
            href="/resume"
            className={styles.card}
          >
            <h3>Resume &rarr;</h3>
            <p>Feel free to check out my Resume!</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h3>Contact me &rarr;</h3>
            <p>Details on how to get in touch!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Created by Mark Priscella using nextJS
        </a>
      </footer>
    </div>
  )
}
