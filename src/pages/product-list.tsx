import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

import Image from "next/image";
import ArrowBottom from "../assets/icons/arrowBottom.svg";
import ImageBanner from "../assets/product/bannerList.png";

import Filters from "@/components/ListPage/Filters";
import ListProduct from "@/components/ListPage/ListProducts";

import { Rubik } from "next/font/google";
import Head from "next/head";
const rubik = Rubik({ subsets: ["latin"] });

function ProductList() {
  return (
    <>
      <Head>
        <title>Lista de Produtos - Kicks</title>
      </Head>

      <Header />
      <main className={rubik.className}>
        <div className="max-w-[84.5rem] mx-auto px-4">
          <section className="relative h-[395px] w-full justify-center flex flex-col mt-20 mb-8">
            <Image
              src={ImageBanner}
              alt=""
              quality={100}
              className="rounded-[48px] absolute"
            />

            <div className="z-10 relative bg-red pl-10 max-w-[490px]">
              <h2 className="text-gray text-2xl font-semibold">
                Limited time only
              </h2>
              <h1 className="my-2 text-7xl text-white font-bold">
                Get 30% off
              </h1>
              <p className="text-white font-light text-xl">
                Sneakers made with your comfort in mind so you can put all of
                your focus into your next session.
              </p>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-dark_gray text-4xl font-semibold">
                  Life Style Shoes
                </h2>
                <span className="text-dark_gray text-base">122 items</span>
              </div>

              <button className="bg-white rounded-2xl flex items-center justify-between px-4 gap-2 w-[184px] h-[56px]">
                <span className="text-base font-semibold text-dark_gray">
                  Trending
                </span>{" "}
                <Image src={ArrowBottom} alt="" width={24} height={24} />
              </button>
            </div>

            <div className="flex gap-4">
              <Filters />
              <ListProduct />
            </div>
          </section>
        </div>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ProductList;
