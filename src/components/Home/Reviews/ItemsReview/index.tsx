import React, { useEffect, useState } from "react";
import Star from "../../../../assets/icons/star.svg";

import Image, { StaticImageData } from "next/image";

interface ItemReviewProps {
  imgUrlPoster: string | StaticImageData;
  title: string;
  quantityStar: number;
  photoUser: string | StaticImageData;
  description: string;
}
function ItemReview({
  imgUrlPoster,
  photoUser,
  quantityStar,
  title,
  description
}: ItemReviewProps) {
  const newQuantityStar = Array.from({ length: quantityStar }, (_, i) => i);
  
  return (
    <div className="bg-fa_white max-w-[429px] rounded-t-[32px] rounded-b-[32px]">
      <div className="px-8 pt-8 flex justify-between items-start">
        <div>
          <span className="text-dark_gray text-2xl font-bold mb-2">
            {title}
          </span>
          <p className="font-normal font-sans text-base mb-2 text-dark_gray">
           {description}
          </p>
        </div>
        <Image
          src={photoUser}
          width={64}
          height={64}
          alt=""
          className="rounded-full ml-2 block"
        />
      </div>

      <div className="pl-8 flex items-center pb-8">
        {newQuantityStar.map((el, index) => (
          <Image src={Star} width={24} height={24} alt="star" key={index}/>
        ))}
        <span>{newQuantityStar.length}.0</span>
      </div>
      <Image
        src={imgUrlPoster}
        width={429}
        height={325}
        alt=""
        className="rounded-b-[32px]"
      />
    </div>
  );
}

export default ItemReview;
