import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewDrops from "@/components/Home/NewDrops";
import Review from "@/components/Home/Reviews";
import NewsLetter from "@/components/NewsLetter";

import Head from "next/head";
import { Rubik } from "next/font/google";
import { client } from "../../lib/client";
import { GetServerSideProps } from "next";
const rubik = Rubik({ subsets: ["latin"] });

import { urlFor } from "../../lib/client";
import Image from "next/image";

interface HomeProps {
  products: {
    id: string;
    title: string;
    description: string;
    price: number;
    slug: string;
    images: [{}];
  };
  banner: [
    {
      id: string;
      title: string;
      description: string;
      price: number;
      slug: string;
      images: [{}];
    }
  ];
}
export default function Home({ products, banner }: HomeProps) {
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
        <Hero images={banner[0].images} slug={banner[0].slug}/>
        <NewDrops />
        <Categories />
        <Review />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = '*[_type == "product"]';
  const productsData = await client.fetch(query);

  const products = productsData.map((product: any) => {
    return {
      id: product._id,
      title: product.name,
      description: product.details,
      price: product.price,
      slug: product.slug.current,
      images: product.image,
    };
  });
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const banner = bannerData.map((product: any) => {
    return {
      id: product._id,
      title: product.name,
      description: product.details,
      price: product.price,
      slug: product.slug.current,
      images: product.image,
    };
  });

  console.log(banner);
  return {
    props: {
      products,
      banner,
    },
  };
};
