import React from "react"
import styles from '../styles/Home.module.css'

const Create_a_Date = () => (
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
);

export default Create_a_Date;