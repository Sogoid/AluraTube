import styles from "../../styles/menu.module.css";
import config from "../../config.json";
import Search, { Component } from "../Menu/components/search.js";
import BotaoDark, { Components } from "../Menu/components/botaodark"
import * as React from "react";



export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (
        <>
            <nav className={styles.menuglobal}>

                <section>
                    <div className={styles.menulogo} />
                    <style jsx>{`
                            div{
                            background-image: url(${config.logo});
                            }          
                        `}</style>
                </section>
                <section>
                    <h2 className={styles.paraf}>{config.namelogo}</h2>

                </section>
                <section>
                    <div>
                        <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                    </div>
                </section>
                <section>
                    <div>
                        <BotaoDark />
                    </div>
                </section>
            </nav>
        </>
    )
}