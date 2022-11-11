
import styles from "../styles/index.module.css";
import config from "../config.json";
import TimeLine from "../components/TimeLine/index.js";
import Header from '../components/Header/index.js';
import Banner from '../components/Banner/index.js';
import Head from "next/head";
import * as React from "react";
import Menu from "../components/Menu/index.js";
import Footer from "../components/Footer/Footer";
import MenuLateral from "../components/MenuLateral/menulateral";

export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>AluraTube</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Estudo de React na Imersão Alura" />
                    <meta name="author" content="Diogo-Sogoid" />
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/AluraTube.ico" />
                </Head>
                <section >
                    <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                    <Banner />
                    <div className={styles.sectdiv}>
                        <div>
                            <MenuLateral />
                        </div>
                        <div >
                            <div>
                                <Header />
                            </div>
                            <div>
                                <p className={styles.linha}></p>
                            </div>
                            <div >
                                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    )
}