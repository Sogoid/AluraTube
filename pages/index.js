
import styled from "styled-components";
import Head from "next/head";
import * as React from "react";
import config from "../config.json";
import TimeLine from "../components/TimeLine/timeline";
import Header from '../components/Header/header';
import Banner from '../components/Banner/bannercomp';
import Menu from "../components/Menu/menucomp";
import Footer from "../components/Footer/Footer";


const StyledLinha = styled.div` 
content: '';
    display: block;
    height: 1px;
    width: 100%;
    padding: 0 16px;
    background-color: black;
    margin-top: 0;
`;

export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (

        <div>
            <Head>
                <title>AluraTube</title>


            </Head>
            <section >
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                <Banner />
                <div>

                    <div >
                        <div>
                            <Header />
                        </div>
                        <StyledLinha />
                        <div >
                            <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                        </div>
                    </div>
                </div>
                <StyledLinha />
                <Footer />
            </section>
        </div>

    );
}