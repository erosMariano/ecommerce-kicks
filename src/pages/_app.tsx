import ProductProvider from "@/Context/Context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <NextNProgress color="#4A69E2" />
      <Component {...pageProps} />
    </ProductProvider>
  );
}
