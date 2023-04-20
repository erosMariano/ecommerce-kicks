import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewDrops from "@/components/Home/NewDrops";
import Review from "@/components/Home/Reviews";
import NewsLetter from "@/components/NewsLetter";

import Head from "next/head";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Kicks</title>
        <meta
          name="description"
          content="Confira a melhor seleção de tênis na nossa loja online especializada! Temos os modelos mais recentes das marcas mais famosas, com preços incríveis e envio para todo o Brasil. Compre agora e arrase com um visual moderno e confortável!"
        />
      </Head>
      <main className={`${rubik.className}`}>
        <Header />
        <Hero />
        <NewDrops />
        <Categories />
        <Review />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
