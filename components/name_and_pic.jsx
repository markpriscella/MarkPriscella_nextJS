import React from "react"
import styles from '../styles/Home.module.css'

const Name_and_Pic = () => (
    <div className={styles.main}>
        <img src="/img/MarkProfile.png" alt="Mark's Profile Photo" 
            className={styles.ProfilePic}/>

        <h1 className={styles.title}>
        Mark Priscella
        </h1>
    </div>
);

export default Name_and_Pic;