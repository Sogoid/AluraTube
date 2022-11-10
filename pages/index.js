
import styles from "../styles/index.module.css"
import config from "../config.json";
import TimeLine from "../components/TimeLine/index.js";
import Header from '../components/Header/index.js';
import Banner from '../components/Banner/index.js';
import Head from "next/head";
import * as React from "react";
import Menu from "../components/Menu/index.js";

export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>AluraTube</title>
                    <meta name="description" content="Gererated by create nextjs" />
                    <link rel="icon" href="../public/LupaAluraTube.svg" />
                </Head>
                <section >
                    <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                </section>
                <section>
                    <Banner />
                </section>
                <section >
                    <Header />
                </section>
                <section className={styles.timeli}>
                    <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                </section>
            </div>
        </>
    )
}