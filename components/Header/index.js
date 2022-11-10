import config from "../../config.json";
import styles from "../../styles/header.module.css";

export default function Header() {
    return (
        <div className={styles.Header}>
            <img className={styles.imagemperfil} src={`https://github.com/${config.github}.png`} />
            <section className={styles.userinfo}>
                <h2>{config.name}</h2>
                <p >{config.job}</p>
            </section>
        </div>
    )
}