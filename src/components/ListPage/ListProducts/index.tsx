import CardProduct from "@/components/CardProduct";
import React from "react";
import ArrowNext from "../../../assets/icons/arrowNext.svg";
import ArrowPrev from "../../../assets/icons/arrowPrev.svg";

import ProductImage from "../../../assets/product/product-details1.png";
import Image from "next/image";

function ListProduct() {
  return (
    <div className="w-full flex flex-col flex-1 h-fit">
      <div className="flex flex-col lg:flex-row flex-1 gap-x-2 lg:gap-x-4 gap-y-9 justify-end mb-6">
        <div className="w-full lg:max-w-[19.875rem] h-fit">
          <CardProduct
            imgUrl={ProductImage}
            price={125}
            slug="produto-teste"
            title="Produto teste"
          />
        </div>
        <div className="w-full lg:max-w-[19.875rem]">
          <CardProduct
            imgUrl={ProductImage}
            price={125}
            slug="produto-teste"
            title="Produto teste"
          />
        </div>

        <div className="w-full lg:max-w-[19.875rem]">
          <CardProduct
            imgUrl={ProductImage}
            price={125}
            slug="produto-teste"
            title="Produto teste"
          />
        </div>
        <div className="w-full lg:max-w-[19.875rem]">
          <CardProduct
            imgUrl={ProductImage}
            price={125}
            slug="produto-teste"
            title="Produto teste"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-4 mt-16 mb-14">
        <button className="flex gap-1 uppercase px-4 rounded-lg border items-center h-8">
          <Image src={ArrowPrev} alt="" width={16} height={16} /> Previous
        </button>
        <div className="flex items-center gap-4">
          <button className="rounded-lg border w-8 h-8">1</button>
          <button className="rounded-lg border w-8 h-8">2</button>
          <button className="rounded-lg border w-8 h-8">3</button>
          <button className="rounded-lg border w-8 h-8">4</button>
          ...
          <button>10</button>
        </div>
        <button className="flex gap-1 uppercase px-4 rounded-lg border items-center h-8">
          Next
          <Image src={ArrowNext} alt="" width={16} height={16} />
        </button>
      </div> 
    </div>
  );
}

export default ListProduct;
