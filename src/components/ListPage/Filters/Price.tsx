import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";

export function Price() {
  const [price, setPrice] = useState(true);

  return (
    <div>
      <div
        className="flex justify-between items-center mb-4"
        onClick={() => setPrice((prevState) => !prevState)}
      >
        <h3 className="uppercase text-dark_gray text-base font-semibold">
          Price
        </h3>
        <Image
          src={ArrowBottom}
          alt=""
          width={24}
          height={24}
          className={`${price ? "rotate-180" : "rotate-0"} transition-all`}
        />
      </div>
      <div
        className={`flex gap-2 flex-col ${
          price ? "max-h-3" : "max-h-0"
        } transition-all overflow-hidden`}
      >
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          className="w-full h-2 rounded-full bg-gray-300 appearance-none bg-dark_gray outline-none thumb:bg-indigo-500 thumb:w-4 thumb:h-4 thumb:rounded-full thumb:cursor-pointer"
          style={{ outline: "none" }}
        />
      </div>
    </div>
  );
}
