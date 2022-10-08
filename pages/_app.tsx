import "../styles/globals.css";
import Cabecalho from "../src/components/Cabecalho";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cabecalho />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
