import styles from "../../styles/menu.module.css";
import config from "../../config.json";
import Search, { Component } from "../Menu/components/search.js";
import * as React from "react";
import DarkModeSwitch from "./components/DarkModeSwitch";



export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (
        <>
            <nav className={styles.menuglobal}>

                <section>
                    <div className={styles.menulogo} />
                    <style jsx>{`
                            div{
                            background-image: url(${config.logo});
                            background-repeat: no-repeat;
                            background-size: 80%;
                            
                            }          
                        `}</style>
                </section>
                <section>
                    <h2 className={styles.paraf}>{config.namelogo}</h2>
                    <style jsx>{`
                            h2{
                                -webkit-text-fill-color: ${({ theme }) => theme.textColorBase || "#e5e5e5"};                            
                            }          
                        `}</style>

                </section>
                <section>
                    <div>
                        <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                    </div>
                </section>
                <section>
                    <div>
                        <DarkModeSwitch />
                    </div>
                </section>
            </nav>
        </>
    )
}