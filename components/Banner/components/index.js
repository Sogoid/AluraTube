import config from "../../../config.json";
import styles from "../../../styles/banner.module.css";

export default function Banner() {
    return (
        <div className={styles.Banner}>
            <img src={config.banner} />
        </div>
    )
}