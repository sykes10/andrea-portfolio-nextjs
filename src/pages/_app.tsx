import type { AppType } from "next/dist/shared/lib/utils";
import { Karla, Libre_Baskerville } from "@next/font/google";
import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});
const baskervville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});
const AndreaPortfolio: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>AndreaDN. | Portfolio</title>
        <meta
          name="description"
          content="This is a portfolio that showcases the amazing work done by Andrea de Armas as UI/UX designer"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${karla.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${baskervville.style.fontFamily};
          font-weight: 700;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
};

export default AndreaPortfolio;
