import config from "../../../config.json";
import styles from "../../../styles/header.module.css";
import Head from 'next/head';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.Header}>
            <img className={styles.imagemperfil} src={`https://github.com/${config.github}.png`} />
            <section>
                <h2>{config.name}</h2>
                <p>{config.job}</p>
            </section>
        </div>
    )
}