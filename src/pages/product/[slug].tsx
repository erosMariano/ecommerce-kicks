import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

import { DetailsProduct } from "@/components/Products/DetailsProduct";
import PhotosContainer from "@/components/Products/PhotosContainer";
import { StaticImageData } from "next/image";
import ProductRelatedImg from "../../assets/tenis/adidasDrop1.png";

import Related from "@/components/Products/Related";
import { GetStaticProps } from "next";
import { Rubik } from "next/font/google";
import Head from "next/head";
import { client, urlFor } from "../../../lib/client";
const rubik = Rubik({ subsets: ["latin"] });

interface ProductRelated {
  imgUrl: string | StaticImageData;
  title: string;
  price: number;
}

interface DetailsProductProps {
  id: string;
  title: string;
  description: string;
  urlImage: string;
  price: number
}

interface SizeProps {
  size: number;
  enable: boolean;
}

interface ProductDetails {
  product: {
    _id: string;
    name: string;
    details: string;
    price: number;
    slug: string;
    image: [{}];
    colors: [{
      code: string;
      name: string;
    }];
    sizes: SizeProps[];
  };
}

function Product({ product }: ProductDetails) {
  const ProductRelated: ProductRelated = {
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 124,
    imgUrl: ProductRelatedImg,
  };
  

  const imageURL = urlFor(product.image[0]).toString();

  const detailsProduct: DetailsProductProps = {
    id: product._id,
    description: product.details,
    title: product.name,
    urlImage: imageURL,
    price: product.price
  };
  return (
    <>
      <Head>
        <title>{product.name} - Kicks</title>
      </Head>
      <main className={rubik.className}>
        <Header />
        <section className="max-w-[84.5rem] mx-auto px-4 pt-6 xl:pt-24 flex gap-16  mb-32 justify-between flex-col xl:gap-32 lg:flex-row">
          <PhotosContainer images={product.image} />
          <DetailsProduct
            product={detailsProduct}
            colors={product.colors}
            sizes={product.sizes}
          />
        </section>
        <Related
          related={[
            ProductRelated,
            ProductRelated,
            ProductRelated,
            ProductRelated,
          ]}
        />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}

export default Product;
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);

  const paths = products.map((product: { slug: { current: any } }) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
