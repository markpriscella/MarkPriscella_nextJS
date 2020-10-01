import Head from 'next/head'
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

        <img src="/MarkProfile.png" alt="Mark's Profile Photo" 
          className={styles.ProfilePic}/>

        <h1 className={styles.title}>
          About Me
        </h1>

        <a className={styles.cardProject}>
        <h3 className={styles.main}>
          I never expected to graduate college in the middle of 
          a pandemic, but since graduating in June I have been 
          busy learning about different tech stacks and am very 
          familiar with many different backend languages and 
          frameworks such as PHP, Python, and NodeJS. I grew up 
          and currently live in Massachusetts. In my free time 
          I enjoy playing the drums, video games, and spending 
          time with friends preferably outside.<br></br>
          <br></br>
          I have a passion for solving problems, as well as full 
          stack web development. Math has always been a favorite 
          class of mine which is why I decided to get a minor in 
          mathematics. My favorite math classes in college were 
          Discrete Math, and linear algebra. I have 6+ years of 
          object oriented programming (OOP), highschool 
          and undergrad. <br></br>
          <br></br>
          My undergraduate studies were first taught in C and 
          later C++. This made sure that the students had a very 
          strong understanding of a more lower level language like 
          C.  Higher level classes like algorithms taught me about 
          time complexities, and how to figure out what time 
          complexity a function will produce when looking at the 
          code. Additionally, Computer Security taught me about 
          networking, how to store and manage data properly, and 
          how to write safer, more secure code. Computer Security 
          also taught me how to lead, manage, and motivate a group 
          of senior students while developing our final project.<br></br>
          <br></br>
          My undergraduate studies specialized me in being a problem 
          solver, hard worker, and being able to learn and evolve, when 
          needed, to find a solution to the problem at hand. Now that I 
          have graduated, I'm excited to bring the skills I've learned 
          into a professional setting where I can expand my skillset even
          further.
        </h3>
        </a>
        
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