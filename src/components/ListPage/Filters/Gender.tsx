import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";

export function Gender() {
  const [gender, setGender] = useState(true);

  return (
    <div>
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={() => setGender((prevState) => !prevState)}
      >
        <h3 className="uppercase text-dark_gray text-base font-semibold">
          Gender
        </h3>
        <Image
          src={ArrowBottom}
          alt=""
          width={24}
          height={24}
          className={`${gender ? "rotate-180" : "rotate-0"} transition-all`}
        />
      </div>
      <div
        className={`flex gap-2 flex-col ${
          gender ? "max-h-16" : "max-h-0"
        } transition-all overflow-hidden`}
      >
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
          />
          <span className="ml-2 font-medium">Men</span>
        </label>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
          />
          <span className="ml-2 font-medium">Runners</span>
        </label>
      </div>
    </div>
  );
}
