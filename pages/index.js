
import styles from "../styles/index.module.css"
import config from "../config.json";
import TimeLine from "../components/TimeLine/index.js";
import Menu from '../components/Menu/index.js';
import Header from '../components/Header/index.js';
import Banner from '../components/Banner/index.js';
import Head from "next/head";




export default function HomePage() {
    return <div className={styles.container}>
        <Head>
            <title>AluraTube</title>
            <meta name="description" content="Gererated by create nextjs" />
            <link rel="icon" href="../public/LupaAluraTube.svg" />
        </Head>
        <section >
            <Menu />

        </section>
        <section>
            <Banner />
        </section>
        <section >
            <Header />
        </section>
        <section className={styles.timeli}>
            <TimeLine playlists={config.playlists} />
        </section>
    </div>
}