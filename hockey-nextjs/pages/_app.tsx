import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import "../globals.css";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider theme={theme}>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
