
import styles from "../styles/index.module.css"
import config from "../config.json";
import TimeLine from "../components/TimeLine/components/index.js";
import Menu from '../components/Menu/components/index.js';
import Header from '../components/Header/components/index.js';
import Banner from '../components/Banner/components/index.js';


export default function HomePage() {
    return <div className={styles.container}>
        <section>
            <Menu />
        </section>
        <section className={styles.Banner}>
            <Banner />
        </section>
        <Header />
        <TimeLine playlists={config.playlists} />
    </div>
}