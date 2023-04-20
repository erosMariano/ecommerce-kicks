import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";

export function RefineBy() {
  const [refineBy, setRefineBy] = useState(true);

  return (
    <div>
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={() => setRefineBy((prevState) => !prevState)}
      >
        <h3 className="uppercase text-dark_gray text-base font-semibold">
          Refine by
        </h3>
        <Image
          src={ArrowBottom}
          alt=""
          width={24}
          height={24}
          className={`${refineBy ? "rotate-180" : "rotate-0"} transition-all`}
        />
      </div>
      <div
        className={`flex gap-4 transition-all ${
          refineBy ? "max-h-12" : "max-h-0"
        } overflow-hidden`}
      >
        <button className="bg-blue px-4 py-3 font-semibold text-white rounded-xl text-xs">
          Mens
        </button>
        <button className="bg-blue px-4 py-3 font-semibold text-white rounded-xl text-xs">
          Casual
        </button>
      </div>
    </div>
  );
}
