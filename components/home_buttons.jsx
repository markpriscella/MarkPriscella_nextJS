import React from "react"
import styles from '../styles/Home.module.css'

const Home_Buttons = () => (
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
);

export default Home_Buttons;