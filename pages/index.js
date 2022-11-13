
import styles from "../styles/index.module.css";
import config from "../config.json";
import TimeLine from "../components/TimeLine/timeline";
import Header from '../components/Header/header';
import Banner from '../components/Banner/bannercomp';
import Head from "next/head";
import * as React from "react";
import Menu from "../components/Menu/menucomp";
import Footer from "../components/Footer/Footer";
import MenuLateral from "../components/MenuLateral/menulateral";

export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }}>
            <Head>
                <title>AluraTube</title>


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
                <div>
                    <p className={styles.linhafooter}></p>
                </div>
                <Footer />
            </section>
        </div>

    );
}