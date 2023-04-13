import Image from "next/image";
import React from "react";

import NikeMain from "../../../assets/tenis/nike_air_max1.png";
import NikeMini1 from "../../../assets/tenis/nike_air_max2.png";
import NikeMini2 from "../../../assets/tenis/nike_air_max3.png";

import BlueButton from "@/components/BlueButton";


function Hero() {
  return (
    <section>
      <h1 className="text-[223.5px] uppercase font-bold">
        Do it <span className="text-blue">right</span>
      </h1>

      <div className="relative">
        <div className="relative h-[750px] flex items-end">
          <div className="absolute w-full h-[750px] rounded-[64px] overflow-hidden -z-10">
            <Image src={NikeMain} fill alt="" quality={100} />
          </div>

          <h5 className="absolute bg-dark_gray p-6 text-gray font-semibold rotate-[270deg] left-[-82px] top-[162px] rounded-b-2xl">
            Nike product of the year{" "}
          </h5>
          <div className="w-[490px] ml-12 pb-12">
            <h2 className="text-white font-semibold text-7xl">NIKE AIR MAX</h2>
            <p className="text-white font-semibold text-2xl font-sans mb-6">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <BlueButton urlRedirect="/" text="Shop now" />
          </div>
        </div>

        <div className="absolute right-8 bottom-8 flex gap-4 flex-col ">
          <Image
            src={NikeMini1}
            width={160}
            height={160}
            alt=""
            quality={100}
            className="rounded-[32px] border-[3px] border-gray"
          />
          <Image
            src={NikeMini2}
            className="rounded-[32px] border-[3px] border-gray"
            width={160}
            height={160}
            alt=""
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
