import "../styles/globals.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from 'next/head'
import SEO from "@/utils/seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
