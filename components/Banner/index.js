import styles from "../../styles/banner.module.css";
import config from "../../config.json";

export default function Banner() {
    return (
        <>
            <div className={styles.Banner} />
            <style jsx>{`
            div {
                background-image: url(${config.bg});
                }
            `}</style>

        </>
    )
}