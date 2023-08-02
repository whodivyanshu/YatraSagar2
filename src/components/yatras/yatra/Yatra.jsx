import React from 'react'
import Styles from "./yatra.module.css"
import Image from 'next/image'
// import image1 from "./image.jpg";
// import image2 from "./ima.jpg";
import { Poppins } from 'next/font/google';
import Link from 'next/link';


const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    });


const Yatra = () => {
  return (
    <Link href="/yatra?divyanshu='hello'">
    <div className={Styles.container} >
        <div className={Styles.image} >
            <Image src="https://drive.google.com/uc?export=view&id=1e5ae-Wu7_Yli4voNBJHG-EFkSVodqN-6" width={400} height={400} alt="Kedarnath Temple"/>
        </div>
        <div className={Styles.text} >
            <h2 style={poppins.style}>Kedarnath Temple</h2>
            <p style={poppins.style}>Uttrakhand</p>
        </div>
    </div>
    </Link>
  )
}

export default Yatra;
