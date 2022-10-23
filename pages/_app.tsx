import { FC } from "react"
import Head from "next/head"

import type { AppProps } from "next/app"

import { GlobalStyle } from "./App.styles"
import "antd/dist/antd.min.css"

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=optional'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
