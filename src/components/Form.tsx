import styles from "./Form.module.css";
import image from '../images/about/image.png'
import { useEffect } from "react";

const Form=()=>{

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return(
        <section className={styles.mainwrapper} id="form" data-scroll-to="form">
            <div className={styles.subwrapper}>
            <div className={styles.title_wrapper}>
                <p className={styles.title}>Apply</p>
                <p className={styles.title} style={{color:"#F35701"}}>Now!</p>
            </div>
            <div
                className={styles.form_wrapper}
                dangerouslySetInnerHTML={{
                    __html: `<iframe data-tally-src="https://tally.so/embed/3xNOQv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1368" frameborder="0" marginheight="0" marginwidth="0" title="Cryptojob.haus List"></iframe>`
                }}
            />
            </div>
        </section>
    )
}

export default Form