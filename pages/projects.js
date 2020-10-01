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

        {/* Image Encrypter/Decrypter & Homemade LFSR */}
        <div className={styles.cardProject}>
          <h2 className={styles.main}>
            Image Encrypter/Decrypter & Homemade LFSR <br></br>
            <br></br>Example Input/Output<br></br><br></br>
            <img src="/lfsr_pic_example.png" 
            className={styles.profileImage}/> <br></br>
            I designed, implemented, and tested (using the BOOST 
            testing framework) a linear feedback shift register 
            (LFSR). The LFSR was then used to modify an image’s 
            pixel properties to distort the image. When the distorted
            image is ran through the program a second time, the original
            image is outputted. The application is written in C++ and 
            uses the SFML library.
          </h2>
        </div>

        <div className={styles.cardProject}>
          <h2 className={styles.main}>
            File Sharing Application (Airdrop Clone) <br></br>
            <br></br>
            I organized and led a team of 4 to design a file sharing 
            application (Airdrop clone). We designed the app with 
            security in mind to keep the files as safe as possible. 
            I defined milestones for my team and organized regular 
            check-ins to monitor progress and strengthen team-wide 
            communication. The application was written in python and 
            used JSON to store data.
          </h2>
        </div>

        <div className={styles.cardProject}>
          <h2 className={styles.main}>
            "Create a Date" Mobile App <br></br> <br></br>
            I designed a non-native mobile application that helps 
            couples and friends decide what to do when going out. 
            The user populates both a restaurant and 
            activity list, and the app randomly select one 
            item from each list to present to the user. 
            I made this because my friends and I often have 
            a tought time deciding what to do when we go out 
            so I thought it would be fun to make an app that 
            decides for us. "Create a Date" is written in the 
            dart language and is developed using the flutter 
            framework developed by google. The data is stored 
            using SQLite.
          </h2>
        </div>
        
        
        
      
        



        
        
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
