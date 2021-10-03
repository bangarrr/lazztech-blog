import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import Head from "next/head";
import Layout from "@/components/Layout";
import theme from "@/theme";
import {usePageView} from "@/libs/gtag";

function MyApp({Component, pageProps}: AppProps) {
  usePageView()

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
