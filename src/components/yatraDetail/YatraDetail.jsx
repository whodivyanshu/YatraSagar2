import React from 'react'
import Styles from "./yatradetail.module.css"
import Image from 'next/image'
import { Lora, Moulpali } from 'next/font/google'
import { Mulish } from 'next/font/google'



const lora = Lora({
    weight: "700",
    subsets: ["latin"],
});

const mulish = Mulish({
    weight: "400",
    subsets: ["latin"],
});



const YatraDetail = () => {
    return (
        <div className={Styles.container} >
            <div className={Styles.first} >
                <div className={Styles.left} >
                    <h1 style={lora.style}>A soul-stirring journey <br /> to Kedarnath</h1>
                    <p style={mulish.style} >The majestic mountains echo with tales of devotion and natures awe-inspiring <br /> beauty</p>
                </div>
                <div className={Styles.right} >
                    <Image src="https://drive.google.com/uc?export=view&id=1e5ae-Wu7_Yli4voNBJHG-EFkSVodqN-6" alt='yatraimage' width={550} height={660} />
                </div>
            </div>
            <div className={Styles.second} >
                <div className={Styles.sleft} >
                    <Image src="https://drive.google.com/uc?export=view&id=1X7YB3tQlm_qWB12YGTetrK7wJv0tNtrw" alt='yatraimage' width={300} height={300} />
                </div>
                <div className={Styles.sright} >
                    <h1 style={lora.style}>The sacred river Ganga <br /> flows gracefully</h1>
                    <p style={mulish.style} >Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April and November. During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogenous form of Shiva, the Lord of Kedarkhand, the historical name of the region</p>
                </div>
            </div>
            <div className={Styles.second1} >
                <div className={Styles.s1left} >
                    <h1 style={lora.style}>The sacred river Ganga <br /> flows gracefully</h1>
                    <p style={mulish.style} >Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April and November. During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogenous form of Shiva, the Lord of Kedarkhand, the historical name of the region</p>
                </div>
                <div className={Styles.s1right} >
                    <Image src="https://drive.google.com/uc?export=view&id=1X7YB3tQlm_qWB12YGTetrK7wJv0tNtrw" alt='yatraimage' width={300} height={300} />
                </div>
            </div>
            <div className={Styles.third} >
                <h1 style={lora.style}>Things to Carry in Kedarnath Yatra <br /> Trekking Tips</h1>
                <div className={Styles.third1}>

                    <div className={Styles.tleft} >
                        <Image src="https://drive.google.com/uc?export=view&id=10cRH7c1CsK7rOj7tsCsYejSJMPMlvtmL" alt='image' width={400} height={500} />
                    </div>
                    <div className={Styles.tright} style={mulish.style} >
                        <p>
                            The closing date of Kedarnath is fixed i.e 2 days after Diwali when Bhai Dooj is celebrated.  In 2023, Diwali will be celebrated on 12 Nov, so Kedarnath Temple will closed on 14 Nov. Kedarnath temple will be closed for winter after Pooja archana in morning. Closing Date of Kedarnath Dham for 2023 will be declared on Vijaydashmi.The best time to visit Kedarnath is the summer season, from April to June. You can also plan Kedarnath Yatra during the pre-winter months, September-October. This sacred Dham or Temple remains closed from November-March (winter) due to extreme cold and heavy snowfall.
                        </p>


                        <h4>Few tips for your Kedarnath Temple trek:</h4>
                        <ol>
                            <li>Start your trek early in the morning to avoid the harsh sunlight of noon.</li>
                            <li>Carry an umbrella and raincoat as per the weather.</li>
                            <li>Walk with good grip shoes and try to carry only necessary things in your bag because a heavy bag can slower your speed in the trek and an extra load can hurt your back.</li>
                            <li>Carry water bottles but don’t through them anywhere, respect nature.</li>
                            <li>Keep your eyes on the trekking route most of the time cause sometimes ponies coming back from the temple can hit you or can cause serious injury.</li>
                        </ol>

                    </div>
                </div>
            </div>
            <div className={Styles.fourth} >
                <h3>Most important 8 things to carry for Kedarnath Yatra</h3>
                <div className={Styles.fourthh} >

                    <div className={Styles.fleft} >

                        <p>
                            Light BaggageDuring the Kedarnath, Temple trek is most important that you should not carry extra stuff with you. You should keep the minimum things which require during a Kedarnath Temple Trek.
                            Warm ClothesIn the Kedarnath temple weather is very cold all the time. Even in summer as well. You might experience snowfall there, so it’s very important you carry your winter clothes Jackets, etc with you which cover you from toe to head.
                            MedicinesAs we know that the Kedarnath temple is placed at an altitude of 3587 meters above sea level. Catching a cold and fever chances are very high. It would be beneficial for you to carry certain important medicines with you for your cold and fever. You can carry some extra medicine for your stomach and vomiting. Which would help you during the Kedarnath Temple trek and it would prevent you from unnecessary dependence upon some other person.
                            Good Snow Hiking BootsDuring the Trek towards Kedarnath Temple, we would prefer you to carry good trekking boots because you must walk around 18 km and it would take to you 9 hours to get there. You can easily walk during snowfall with such kinds of boots. It would be a good investment if you are a regular trekker.
                            Packed FoodWe would like to refer you to carry some packed foods as per your preference. You can consider lightweight food which keeps you warm from the inside and gives you energy. As you must walk around 18 Km during the Kedarnath temple trek. You can carry some dry fruits, chocolates, biscuits, etc.
                        </p>
                    </div>
                    <div className={Styles.fright} >
                        <Image src="https://drive.google.com/uc?export=view&id=10cRH7c1CsK7rOj7tsCsYejSJMPMlvtmL" alt='iimage' width={400} height={500} />
                    </div>
                </div>
            </div>



            <div className={Styles.fifth} >
                <div className={Styles.fileft} >
                    <h1>Majestic Himalayas <br /> meet the skies</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras.</p>

                    <h2>Gaurikund</h2>
                    <h2>Jungle Chatti</h2>
                    <h2>Bheembali</h2>
                </div>
                <div className={Styles.firight} >
                    <Image src="https://drive.google.com/uc?export=view&id=18KuEyyZ7knbiJSauU1Fu1n_IaV09AXej" alt='image' width={400} height={500} />
                </div>
            </div>


        </div>
    )
}

export default YatraDetail