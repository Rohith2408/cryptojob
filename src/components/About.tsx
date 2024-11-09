import styles from "./About.module.css";
import image from '../images/about/image.png'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body_wrapper}>
                    <div className={styles.title_wrapper}>
                        <p className={styles.title}>About</p>
                        <p className={styles.title} style={{color:"#F35701"}}>Us</p>
                    </div>
                    <p className={styles.text}>
                    Welcome to Crypto Jobs Hub, the go-to platform for finding your next role in the crypto space, managed by @GrindingPoet and @Pancakesbrah. We’re here to make job applications easy and accessible—no more waiting in DMs or searching through scattered posts. Just fill out our simple application form, and we’ll follow up with you as soon as possible.
                    Whether you’re new to crypto or an experienced pro, we connect you with top industry opportunities across roles like development, marketing, and community management. Start building your future in crypto with us!
                    </p>
                </div>
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
            </div>
        </section>
    )
}

export default About