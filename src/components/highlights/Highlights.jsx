// Highlights.js
import React from 'react';
import styles from "./highlights.module.css";
import Image from 'next/image';

import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";

const Highlights = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Yatra Highlights</h1>
        <p>Join the Sacred Mandir Yatra for an Unforgettable Experience!</p>
      </div>
      <div className={styles.imageContainer}>
        <Image alt='hey' src={Image1} width={260} height={400} />
        <Image alt='hey' src={Image2} width={260} height={400} />
        <Image alt='hey' src={Image3} width={260} height={400} />
        <Image alt='hey' src={Image4} width={260} height={400} />
        <Image alt='hey' src={Image5} width={260} height={400} />
      </div>
    </div>
  );
}

export default Highlights;
