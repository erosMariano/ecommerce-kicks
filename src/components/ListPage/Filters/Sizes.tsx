import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";

export function Sizes() {
  const [size, setSize] = useState(true);

  return (
    <div>
      <div
        onClick={() => setSize((prevState) => !prevState)}
        className={`flex justify-between items-center mb-4 overflow-hidden cursor-pointer`}
      >
        <h3 className="uppercase text-dark_gray text-base font-semibold">
          Size
        </h3>
        <Image
          src={ArrowBottom}
          alt=""
          width={24}
          height={24}
          className={`${size ? "rotate-180" : "rotate-0"} transition-all`}
        />
      </div>
      <div
        className={`flex gap-4 flex-wrap transition-all overflow-hidden ${
          size ? "max-h-28" : "max-h-0"
        }`}
      >
        <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-white false">
          41
        </button>{" "}
        <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-white false">
          42
        </button>
        <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-white false">
          43
        </button>
        <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-white false">
          44
        </button>
        <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-white false">
          45
        </button>
      </div>
    </div>
  );
}

 
