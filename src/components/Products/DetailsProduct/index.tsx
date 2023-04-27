import Tag from "@/components/Tag";
import React, { useContext, useState } from "react";
import HeartIcon from "../../../assets/icons/heart.svg";
import Colors from "../Colors";
import Image from "next/image";
import Sizes from "../Sizes";
import { useRouter } from "next/router";
import { ProductContext } from "@/Context/Context";

interface SizeProps {
  size: number;
  enable: boolean;
}

interface DetailsProductProps {
  colors: [
    {
      code: string;
      name: string;
    }
  ];
  sizes: SizeProps[];

  product: {
    id: string;
    title: string;
    description: string;
    urlImage: string;
    price: number;
  };
}
interface ProductList {
  id: string;
  title: string;
  description: string;
  sizeSelected: number;
  quantity: number;
  urlImage: string;
  color: string;
}

export function DetailsProduct({
  colors,
  sizes,
  product,
}: DetailsProductProps) {
  const route = useRouter();

  const { addQuantity, addProductInCart, productList } = useContext(ProductContext);
  const [color, setColor] = useState(colors[0].name);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function handleBuyNow() {
    route.push("/cart");
  }


  const { description, id, title, urlImage } = product;

  function handleSelectColor(colorSelected: string) {
    setColor(colorSelected);
  }

  function handleQuantityProduct() {
    setQuantity((prevState) => prevState + 1);
  }
  function handleSelectedSize(size: number) {
    setSizeSelected(size);
  }

  function handleAddProductInCart() {
    handleQuantityProduct();

    const data: ProductList = {
      id,
      description,
      title,
      urlImage,
      color: color,
      quantity: quantity,
      sizeSelected: sizeSelected,
    };
    addProductInCart(data);
    addQuantity();
  }

  const formatPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="mt-10 xl:mt-0 lg:min-w-[600px]">
      <Tag name="New Release" />
      <h1 className="my-3 uppercase text-dark_gray text-3xl font-semibold">
        {title}
      </h1>
      <span className="text-blue font-semibold text-2xl">{formatPrice}</span>

      <Colors colors={colors} setColor={handleSelectColor} />

      <Sizes sizes={sizes} setSize={handleSelectedSize} />

      <div className="buttons mt-8">
        <div className="flex gap-2">
          <button
            onClick={handleAddProductInCart}
            className="flex-1 bg-dark_gray h-12 uppercase text-white rounded-lg transition hover:bg-zinc-950"
          >
            Add to cart
          </button>
          <button className="bg-dark_gray text-sm h-12 w-12 flex items-center justify-center rounded-lg transition hover:bg-zinc-950">
            <Image src={HeartIcon} width={16} height={16} alt="icon coração" />
          </button>
        </div>
        <button
          onClick={handleBuyNow}
          className="bg-blue h-12 text-sm uppercase flex items-center justify-center rounded-lg w-full text-white font-medium mt-2 transition hover:brightness-90"
        >
          Buy it now
        </button>
      </div>

      <div className="mt-8">
        <h3 className="mb-2 uppercase text-dark_gray text-base font-semibold">
          About the product
        </h3>
        <div className="text-dark_gray text-base font-light">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
