import React from "react";
import { Rubik } from "next/font/google";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Related from "@/components/Products/Related";
const rubik = Rubik({ subsets: ["latin"] });
import ProductRelatedImg from "../assets/tenis/adidasDrop1.png";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Bag from "@/components/Cart/Bag";
import Summary from "@/components/Cart/Summary";

interface ProductRelated {
  imgUrl: string | StaticImageData;
  title: string;
  price: number;
}

const ProductRelated: ProductRelated = {
  title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
  price: 124,
  imgUrl: ProductRelatedImg,
};

function Cart() {
  const related = [
    ProductRelated,
    ProductRelated,
    ProductRelated,
    ProductRelated,
  ];
  return (
    <>
      <Header />
      <main className={rubik.className}>
        <section className="max-w-[84.5rem] mx-auto px-4 mt-8">
          <h1 className="text-3xl font-semibold text-dark_gray">
            Saving to celebrate{" "}
          </h1>
          <p className="my-2 text-sm font-medium text-dark_gray">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
          </p>
          <div className="text-dark_gray">
            <Link href="#" className="underline">
              Join us
            </Link>{" "}
            or{" "}
            <Link href="#" className="underline">
              Sign-in
            </Link>
          </div>

          <div className="flex gap-12 mt-8 mb-10">
            <Bag />
            <Summary />
          </div>
        </section>
      </main>
      <Related related={related} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Cart;
