import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PropsItemsProps {
  imgUrl: string | StaticImageData;
  title: string;
  slug: string;
  price: number;
}
function ItemsDrops({ imgUrl, title, slug, price }: PropsItemsProps) {
  return (
    <div className="max-w-[318px]">
      <div className="bg-fa_white p-2 rounded-3xl">
        <Image
          src={imgUrl}
          width={302}
          height={334}
          alt={title}
          className="rounded-3xl"
        />
      </div>
      <h3 className="text-dark_gray text-2xl font-semibold my-4">{title}</h3>

      <Link
        href={`/product/${slug}`}
        className="bg-dark_gray w-full py-4 text-white rounded-lg block text-center font-medium uppercase transition-all hover:bg-zinc-950"
      >
        View Product - <span className="text-yellow">$125</span>
      </Link>
    </div>
  );
}

export default ItemsDrops;
