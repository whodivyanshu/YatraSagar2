import React from "react";
import styles from './footer.module.css'
import { Poppins, Angkor } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const angkor = Angkor({
  weight: "400",
  subsets: ["latin"],
});


const Footer=()=>{
    return(
        <div id={styles.footer}>
            <h1 style={angkor.style} className={styles.flexDiv}>YatraSagar</h1>
            <div className={styles.flexDiv} id={styles.links} style={poppins.style}>
                <Link rel="stylesheet" href="" >Support Center</Link>
                <Link rel="stylesheet" href="" >Invoicing</Link>
                <Link rel="stylesheet" href="" >Contact</Link>
                <Link rel="stylesheet" href="" >Careers</Link>
                <Link rel="stylesheet" href="" >Blogs</Link>
                <Link rel="stylesheet" href="" >FAQs</Link>
            </div>
            <br />
            <div className={styles.flexDiv} id={styles.socials}>
            <Image width="48" height="48" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
            <Image width="48" height="48" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
            <Image width="48" height="48" src="https://img.icons8.com/ios-filled/50/twitter.png" alt="twitter"/>            </div>
            <br />
            <div className={styles.flexDiv}>Copyright © 2022 FASCO . All Rights Reseved.</div>
            <br />
        </div>
    )
}

export default Footer;