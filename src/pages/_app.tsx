import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { Web3Provider } from "../configuration/Web3";
import { ChakraProvider } from "../configuration/Chakra";
import { useIsMounted } from "../hooks/useIsMounted";
import React from "react";
import { useRouter } from "next/router";
import { Head } from "../components/layout/Head";

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted();
  const router = useRouter();

    //the root component
    return (
      <ChakraProvider>
        <Head />
        <Web3Provider>
          {isMounted && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </Web3Provider>
      </ChakraProvider>
    );
}
