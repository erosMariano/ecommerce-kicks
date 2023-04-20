import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";
import Close from "../../../assets/icons/close.svg";
import { RefineBy } from "./RefineBy";
import { Sizes } from "./Sizes";
import { Colors } from "./Color";
import { Gender } from "./Gender";
import { Price } from "./Price";

interface FiltersProps {
  activeMenu: boolean;
  handleActiveMenu: () => void;
}
function Filters(props: FiltersProps) {
  const { activeMenu, handleActiveMenu } = props;

  return (
    <div
      className={`fixed top-0 ${
        activeMenu ? "left-0" : "left-full lg:left-0"
      } transition-all bg-[#E7E7E3] h-screen z-10 w-full  overflow-y-scroll lg:block lg:w-[19.7031rem] lg:bg-transparent lg:relative lg:h-auto lg:overflow-y-auto`}
    >
      <div className="bg-white p-4 lg:pl-0 flex items-center justify-between lg:bg-transparent">
        <h2 className="text-xl text-dark_gray font-bold">Filters</h2>
        <button className="flex lg:hidden" onClick={handleActiveMenu}>
          <Image
            src={Close}
            alt=""
            width={24}
            height={24}
            className="rotate-180"
          />
        </button>
      </div>

      <div className="flex gap-6 flex-col mr-[10px] p-4 lg:pl-0">
        <RefineBy />
        <Sizes />
        <Colors />
        <Gender />
        <Price />

        <div className="lg:hidden flex gap-4 mt-6">
          <button className="uppercase font-medium rounded-lg border h-10 w-full text-xs">
            Reset
          </button>
          <button className="uppercase font-medium rounded-lg border h-10 w-full bg-dark_gray text-white text-xs">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
