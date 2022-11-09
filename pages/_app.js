import styles from "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return <Component{...pageProps} />
}
