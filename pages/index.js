
import styles from "../styles/index.module.css";
import config from "../config.json";
import TimeLine from "../components/TimeLine/index.js";
import Header from '../components/Header/index.js';
import Banner from '../components/Banner/index.js';
import Head from "next/head";
import * as React from "react";
import Menu from "../components/Menu/index.js";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>AluraTube</title>
                    <meta name="description" content="Gererated by create nextjs" />
                    <link rel="icon" href="/AluraTube.ico" />
                </Head>
                <section >
                    <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                    <Banner />

                    <Header />
                    <section>
                        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                    </section>
                    <Footer />
                </section>
            </div>
        </>
    )
}