import styles from "../../styles/menulateral.module.css";
import * as React from "react";


export default function MenuLateral() {
    return (
        <>
            < div className={styles.menulateral}>
                <p className={styles.titulo}>Inicio</p>
                <p className={styles.titulo}>Short</p>
                <p className={styles.titulo}>Biblioteca</p>
                <p className={styles.titulo}>Histórico</p>
                <p className={styles.linhalateral}></p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.linhalateral}></p>
                <p className={styles.titulo}>Assistir mais Tarde</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>
                <p className={styles.titulo}>Inscrições</p>

            </div>

        </>
    )
}