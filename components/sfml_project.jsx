import React from "react"
import styles from '../styles/Home.module.css'

const SFML_Project = () => (
    <div className={styles.cardProject}>
        <h2 className={styles.main}>
        Image Encrypter/Decrypter & Homemade LFSR <br></br>
        <br></br>Example Input/Output<br></br><br></br>
        <img src="/img/lfsr_pic_example.png" 
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
);

export default SFML_Project;