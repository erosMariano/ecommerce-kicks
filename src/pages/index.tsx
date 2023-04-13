import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewDrops from "@/components/Home/NewDrops";
import Review from "@/components/Home/Reviews";
import NewsLetter from "@/components/NewsLetter";

import { Rubik } from "next/font/google";
import Head from "next/head";
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce - Kicks</title>
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
