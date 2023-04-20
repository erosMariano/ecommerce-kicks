import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

import Image from "next/image";
import ArrowBottom from "../assets/icons/arrowBottom.svg";
import Filter from "../assets/icons/filter.svg";

import ImageBanner from "../assets/product/bannerList.png";

import Filters from "@/components/ListPage/Filters";
import ListProduct from "@/components/ListPage/ListProducts";

import { Rubik } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
const rubik = Rubik({ subsets: ["latin"] });

function ProductList() {

  const [activeMenu, setActiveMenu] = useState(false);

  function handleChangeMenu(){
    setActiveMenu(prevState => !prevState)
  }
  return (
    <>
      <Head>
        <title>Lista de Produtos - Kicks</title>
      </Head>

      <Header />
      <main className={rubik.className}>
        <div className="max-w-[84.5rem] mx-auto px-4">
          <section className="relative h-[149px] lg:h-[395px] w-full justify-center flex flex-col lg:mt-20 lg:mb-8 my-6">
            <Image
              src={ImageBanner}
              alt=""
              quality={100}
              className="rounded-2xl lg:rounded-[48px] absolute h-[149px] lg:h-[395px]"
            />

            <div className="z-10 relative bg-red pl-4 lg:pl-10 max-w-[490px]">
              <h2 className="text-gray text-xs lg:text-2xl font-semibold">
                Limited time only
              </h2>
              <h1 className="my-2 text-xl lg:text-7xl text-white font-bold">
                Get 30% off
              </h1>
              <p className="text-white font-light text-[10px] lg:text-xl pr-2 lg:pr-0">
                Sneakers made with your comfort in mind so you can put all of
                your focus into your next session.
              </p>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex justify-between  mb-8 flex-col-reverse lg:flex-row gap-6">
              <div>
                <h2 className="text-dark_gray text-xl lg:text-4xl font-semibold">
                  Life Style Shoes
                </h2>
                <span className="text-dark_gray text-base">122 items</span>
              </div>

              <div className="items-center justify-between lg:justify-end flex-1 flex gap-6">
                <button onClick={() => setActiveMenu(prevState => !prevState)} className="flex lg:hidden bg-white rounded-lg lg:rounded-2xl items-center justify-between px-4 gap-14 lg:gap-2 max-w-[184px] h-9 lg:h-[56px] ">
                  <span className="text-base font-semibold text-dark_gray">
                    Filters
                  </span>{" "}
                  <Image src={Filter} alt="" width={24} height={24} />
                </button>

                <button className="bg-white rounded-lg lg:rounded-2xl  flex items-center justify-between px-4 gap-14 lg:gap-2 max-w-[184px] h-9 lg:h-[56px]">
                  <span className="text-base font-semibold text-dark_gray">
                    Trending
                  </span>{" "}
                  <Image src={ArrowBottom} alt="" width={24} height={24} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Filters activeMenu={activeMenu} handleActiveMenu={handleChangeMenu}/>
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
