import Tag from "@/components/Tag";
import React, { useState } from "react";
import HeartIcon from "../../../assets/icons/heart.svg";
import BlueButton from "@/components/BlueButton";
import Colors from "../Colors";
import Image from "next/image";
import Sizes from "../Sizes";
import { useRouter } from "next/router";

interface SizeProps {
  size: number;
  enable: boolean;
}

interface DetailsProductProps {
  colors: string[];
  sizes: SizeProps[];
}
export function DetailsProduct({ colors, sizes }: DetailsProductProps) {
  const route = useRouter();
  function handleAddToCart() {}
  function handleBuyNow() {
    route.push("/cart")
  }
  return (
    <div>
      <Tag name="New Release" />
      <h1 className="my-3 uppercase text-dark_gray text-3xl font-semibold ">
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
      </h1>
      <span className="text-blue font-semibold text-2xl">$125.00</span>

      <Colors colors={colors} />

      <Sizes sizes={sizes} />

      <div className="buttons mt-8">
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-dark_gray h-12 uppercase text-white rounded-lg transition hover:bg-zinc-950"
          >
            Add to cart
          </button>
          <button className="bg-dark_gray text-sm h-12 w-12 flex items-center justify-center rounded-lg transition hover:bg-zinc-950">
            <Image src={HeartIcon} width={16} height={16} alt="icon coração" />
          </button>
        </div>
        <button onClick={handleBuyNow} className="bg-blue h-12 text-sm uppercase flex items-center justify-center rounded-lg w-full text-white font-medium mt-2 transition hover:brightness-90">
          Buy it now
        </button>
      </div>

      <div className="mt-8">
        <h3 className="mb-2 uppercase text-dark_gray text-base font-semibold">
          About the product
        </h3>
        <div className="text-dark_gray text-base font-light">
          Shadow Navy / Army Green <br />
          <br />
          This product is excluded from all promotional discounts and offers.
          <br />
          <ul>
            <li>
              Pay over time in interest-free installments with Affirm, Klarna or
              Afterpay.
            </li>
            <li>
              Join adiClub to get unlimited free standard shipping, returns, &
              exchanges.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
