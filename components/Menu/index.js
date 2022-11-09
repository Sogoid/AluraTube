import styles from "../../styles/menu.module.css";
import config from "../../config.json";
import Search, { Component } from "../Menu/components/search.js";

export default function Menu() {
    return (
        <div className={styles.Menu}>
            <div className={styles.logo} />
            <section>
                <h2 className={styles.paraf}>{config.namelogo}</h2>
            </section>
            <div>
                <Search />
            </div>
        </div>
    )
}