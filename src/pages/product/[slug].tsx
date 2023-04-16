import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import React, { useState } from "react";

import Product1 from "../../assets/product/product-details1.png";
import Product2 from "../../assets/product/product-details2.png";
import Product3 from "../../assets/product/product-details3.png";
import Product4 from "../../assets/product/product-details4.png";
import ProductRelatedImg from "../../assets/tenis/adidasDrop1.png";
import { StaticImageData } from "next/image";
import PhotosContainer from "@/components/Products/PhotosContainer";
import { DetailsProduct } from "@/components/Products/DetailsProduct";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

interface ProductRelated {
  title: string;
  images: string[] | StaticImageData;
  price: number;
}

interface SizeProps {
  size: number;
  enable: boolean;
}
interface ProductDetails {
  title: string;
  images: string[] | StaticImageData[];
  colors: string[];
  price: number;
  tag: string;
  sizes: SizeProps[];

  related: ProductRelated[];
}
function Product() {
  const ProductRelated: ProductRelated = {
    images: ProductRelatedImg,
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 124,
  };

  const [product, setProduct] = useState<ProductDetails>({
    title: "",
    images: [Product1, Product2, Product3, Product4],
    colors: ["#4A69E2", "#65e800"],
    price: 0,
    related: [
      ProductRelated,
      ProductRelated,
      ProductRelated,
      ProductRelated,
      ProductRelated,
      ProductRelated,
    ],
    tag: "",
    sizes: [
      {
        size: 48,
        enable: false,
      },
      {
        size: 49,
        enable: true,
      },
      {
        size: 50,
        enable: true,
      },
    ],
  });

  return (
    <main className={rubik.className}>
      <Header />
      <section className="max-w-[84.5rem] mx-auto pt-24 flex gap-4">
        <PhotosContainer images={product.images} />
        <DetailsProduct colors={product.colors} sizes={product.sizes} />
      </section>
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default Product;
