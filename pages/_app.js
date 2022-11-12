import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../components/Menu/components/ColorMode";
import { theme } from "../pages/_appstyles";


// _app.js -> Definições globais do NextJS
// ThemeProvider -> Prover o tema para a app toda
// ColorModeProvider -> Prove o state de light ou dark mode para todo mundo 

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}
function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);
    console.log("procrurando erro", contexto);
    return (

        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>

    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    );
}
