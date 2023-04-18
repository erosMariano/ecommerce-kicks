import React from "react";
import Product from "../../../assets/product/product-details1.png";
import Heath from "../../../assets/icons/heart2.svg";
import Trash from "../../../assets/icons/trash.svg";

import Image from "next/image";
function Bag() {
  return (
    <div className="bg-white p-6 rounded-2xl  w-[48.8638rem]">
      <h2 className="font-semibold text-3xl mb-2 text-dark_gray">Your Bag</h2>
      <p className="text-dark_gray font-light">
        Items in your bag not reserved- check out now to make them yours.
      </p>

      <div className="mt-12 flex gap-6">
        <Image src={Product} alt="" className="rounded-3xl w-48" />

        <div className="flex justify-between flex-1">
          <div>
            <h3 className="font-semibold text-2xl mb-2">
              DROPSET TRAINER SHOES
            </h3>
            <span className="font-semibold text-dark_gray text-xl opacity-80 block font-sans">
              Men&apos;s Road Running Shoes{" "}
            </span>
            <span className="font-semibold text-dark_gray text-xl opacity-80 block font-sans">
              Enamel Blue/ University White
            </span>

            <div className="mt-5 flex gap-10">
              <button className="font-semibold text-dark_gray text-xl opacity-80 font-sans">
                Size 10
              </button>
              <button className="font-semibold text-dark_gray text-xl opacity-80 font-sans">
                Quantity 1
              </button>
            </div>

            <div className="flex gap-6 mt-12">
              <button>
                <Image src={Heath} alt="" />
              </button>
              <button>
                <Image src={Trash} alt="" />
              </button>
            </div>
          </div>

          <span className="text-blue text-2xl font-semibold">$130.00</span>
        </div>
      </div>
    </div>
  );
}

export default Bag;
