import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ArrowNextIcon from "../../../assets/icons/arrowNextWhite.svg";
import ArrowPrevIcon from "../../../assets/icons/arrowPrevWhite.svg";
import CardProduct from "@/components/CardProduct";

interface ProductRelated {
  imgUrl: string | StaticImageData;
  title: string;
  price: number;
}

interface RelatedProps {
  related: ProductRelated[];
}

function Related({ related }: RelatedProps) {
  const [activeButton, setActiveButton] = useState({
    prevButton: false,
    nextButton: true,
  });
  const formatSlug = String(related[0].title).toLocaleLowerCase().replaceAll(" ", "-")

  return (
    <section className="mt-32 mb-24">
      <div className="max-w-[84.5rem] mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-5xl font-bold">You may also like</h2>

          <div className="flex items-center gap-4">
            <button
              className={`${
                activeButton.prevButton
                  ? "opacity-100"
                  : "opacity-50 cursor-not-allowed"
              } bg-dark_gray w-10 h-10 flex items-center justify-center rounded-lg`}
            >
              <Image
                src={ArrowPrevIcon}
                width={16}
                height={16}
                alt="Arrow Prev"
              />
            </button>

            <button
              className={`${
                activeButton.nextButton
                  ? "opacity-100"
                  : "opacity-50 cursor-not-allowed"
              } w-10 h-10 bg-dark_gray flex items-center justify-center rounded-lg`}
            >
              <Image
                src={ArrowNextIcon}
                width={16}
                height={16}
                alt="Arrow Prev"
              />
            </button>
          </div>
        </div>
        
        {/* Implementar carrossel */}
        <div className="flex gap-4 mt-8">
          {related.map((productRelated, index) => (
            <CardProduct
              imgUrl={productRelated.imgUrl}
              price={productRelated.price}
              slug={formatSlug}
              title={productRelated.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Related;
