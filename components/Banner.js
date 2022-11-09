import config from "../config.json";
import styles from "../styles/Home.module.css";

export default function Banner() {
    return (
        <div className={styles.Banner}>
            <img src={config.banner} />
        </div>
    )
}