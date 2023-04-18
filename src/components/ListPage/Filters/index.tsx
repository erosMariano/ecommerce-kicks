import Image from "next/image";
import React from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";

function Filters() {
  return (
    <div className="w-[19.7031rem]">
      <h2>Filters</h2>

      <div className="flex gap-6 flex-col mr-[10px]">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="uppercase text-dark_gray text-base font-semibold">
              Refine by
            </h3>
            <Image
              src={ArrowBottom}
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-blue px-4 py-3 font-semibold text-white rounded-xl text-xs">
              Mens
            </button>
            <button className="bg-blue px-4 py-3 font-semibold text-white rounded-xl text-xs">
              Casual
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="uppercase text-dark_gray text-base font-semibold">
              Refine by
            </h3>
            <Image
              src={ArrowBottom}
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
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

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="uppercase text-dark_gray text-base font-semibold">
              Color
            </h3>
            <Image
              src={ArrowBottom}
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-blue" />{" "}
            <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-slate-700" />
            <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-yellow" />
            <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-red-500" />
            <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-amber-500" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="uppercase text-dark_gray text-base font-semibold">
              Size
            </h3>
            <Image
              src={ArrowBottom}
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Casual shoes</span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Runners</span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Hiking</span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Sneaker</span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Basketball</span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Golf</span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#1F1A24 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
              />
              <span className="ml-2 font-medium">Outdoor</span>
            </label>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="uppercase text-dark_gray text-base font-semibold">
              Size
            </h3>
            <Image
              src={ArrowBottom}
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </div>
          <div className="flex gap-2 flex-col">
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

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="uppercase text-dark_gray text-base font-semibold">
              Price
            </h3>
            <Image
              src={ArrowBottom}
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </div>
          <div className="flex gap-2 flex-col">
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
      </div>
    </div>
  );
}

export default Filters;
