import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import config from "../config.json";
import TimeLine from '../components/TimeLine';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Banner from '../components/Banner';


export default function HomePage() {
    return <div className={styles.container}>
        <section>
        <Menu />
        </section>
        <section className={styles.Banner}>
        <Banner/>
        </section>
        <Header />
        <TimeLine playlists={config.playlists} />
    </div>
}