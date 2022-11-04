import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import LayoutWrapper from "../components/LayoutWrapper";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // theme example: light, dark, dark_dimmed, dark_high_contrast
    // transparent_dark, preferred_color_scheme, custo
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
