import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PropsCardProduct {
  imgUrl: string | StaticImageData;
  title: string;
  slug: string;
  price: number;
}
function CardProduct({ imgUrl, title, slug, price }: PropsCardProduct) {
  return (
    <Link
      href={`/product/${slug}`}
      className="w-full relative"
    >
      <span className="absolute px-4 py-2 bg-blue rounded-tl-3xl rounded-br-3xl flex items-center justify-center font-semibold text-white left-[9px] top-[9px] text-xs">
        New
      </span>
      <div className="bg-fa_white p-2 rounded-3xl">
        <div className="bg-[#eceef0] rounded-3xl">
          <Image
            src={imgUrl}
            width={302}
            height={334}
            alt={title}
            className="rounded-3xl mx-auto"
          />
        </div>
      </div>
      <h3 className="text-dark_gray text-xl lg:text-2xl font-semibold mt-4 mb-2 lg:my-4">{title}</h3>

      <button className="bg-dark_gray text-xs lg:text-base w-full py-4 text-white rounded-lg block text-center font-medium uppercase transition-all hover:bg-zinc-950">
        View Product - <span className="text-yellow">$125</span>
      </button>
    </Link>
  );
}

export default CardProduct;
