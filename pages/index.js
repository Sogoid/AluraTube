
import Head from "next/head";
import * as React from "react";
import config from "../config.json";
import TimeLine from "../components/TimeLine/timeline";
import Header from '../components/Header/header';
import Banner from '../components/Banner/bannercomp';
import Menu from "../components/Menu/menucomp";
import Footer from "../components/Footer/Footer";


export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (

        <div>
            <Head>
                <title>AluraTube</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <section >
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                <Banner />
                <div >
                    <div>
                        <Header />
                    </div>

                    <div >
                        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                    </div>
                </div>


                <Footer />
            </section>
        </div>

    );
}