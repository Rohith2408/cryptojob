import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import coin from '../images/Section1/bitcoin.png'
import logo from '../images/logo.png'
// import telegram_icon from '../images/Section1/telegram.png'
// import twitter_icon from '../images/Section1/twitter.png'
// import dex_icon from '../images/Section1/dex.png'
// import coingecko_icon from '../images/Section1/coingecko.png'
// import sunswap_icon from '../images/Section1/sunswap.jpeg'
// import dextools_icon from '../images/Section1/dextools.png'
// import copy_icon from '../images/Section1/copy.png'
// import image from '../images/Section1/image.png'
// import banner from '../images/banner.gif'
// import insta_icon from '../images/Section1/instagram.png'

const Section1=()=>{

    // const socialIcons= useRef([
    //     { src: telegram_icon, link: "https://t.me/blazethecoin" },
    //     { src: twitter_icon, link: "https://x.com/Blazethecoin?s=09" },
    //     { src:dex_icon, link: "https://dexscreener.com/solana/hhlxpejc26jqtxn2tzjeuarkyratv3wez3zgnkzcvahx" },
    //     { src: dextools_icon, link: "https://www.dextools.io/app/en/solana/pair-explorer/HhLxPejC26JQtxN2TzjEuARkyraTV3wez3ZGnKZcvAHX?t=1728674999549" },
    //     { src:coingecko_icon, link: "" },
    //     { src:insta_icon, link: "" }
    // ]).current
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()
    const ca=useRef("8rvsopG6ZB5Nx8tRxZ5sFunnCRcCZshSTaYzC7zfpump").current

    useEffect(()=>{

    },[currentbg])

    const openForm=()=>{
        const section = document.querySelector(`[data-scroll-to=form]`);
        section?.scrollIntoView({ behavior: 'smooth' });
        //window.open("https://tally.so/r/3xNOQv", "_blank");
    }

    return(
        <section className={styles.mainwrapper} id="home" data-scroll-to="home">
            <div className={styles.subwrapper}>
                <div className={styles.header}>
                    <div style={{flex:1,display:"flex",flexDirection:'row',alignItems:"center"}}>
                        <img src={logo} className={styles.logo}/>
                        <p className={styles.logo_text}>Crypto</p>
                    </div>
                    <div style={{flex:1,alignSelf:"flex-end"}}></div>
                </div>
                <div className={styles.body}>
                    <img src={coin} className={styles.bitcoin}/>
                    <div className={styles.title_wrapper}>
                        <p className={styles.title}>Crypto</p>
                        <p className={styles.title} style={{color:"#F35701"}}>Job</p>
                    </div>
                    <p className={styles.subtitle}>Find your next crypto job without the hassle – fill out the form below, and we'll connect you with top opportunities fast!</p>
                    <button onClick={openForm} className={styles.apply_wrapper}><p className={styles.apply}>Get Started</p></button>
                </div>
            </div>
        </section>
    )
}

export default Section1