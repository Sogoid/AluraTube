import * as React from "react";
import styles from "../../../styles/search.module.css"



export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;
    return (
        <>
            <div className={styles.buscainput}>
                <input className={styles.imput} type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />

                <button className={styles.buttom}></button>
            </div>
        </>
    )

}