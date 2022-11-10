import styles from "../../styles/menu.module.css";
import config from "../../config.json";
import Search, { Component } from "../Menu/components/search.js";
import BotaoDark, { Components } from "../Menu/components/botaodark"
import * as React from "react";


export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (
        <div className={styles.Menu}>
            <div className={styles.logo} />
            <section>
                <h2 className={styles.paraf}>{config.namelogo}</h2>
            </section>
            <div>
                <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            </div>
            <div>
                <BotaoDark />
            </div>
        </div>
    )
}