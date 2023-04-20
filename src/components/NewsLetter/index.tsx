import Image from "next/image";
import React from "react";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
import Logo from "../../assets/logo_newsletter.svg";
function NewsLetter() {
  return (
    <section className={rubik.className}>
      <div className="max-w-[84.5rem] mx-auto pt-16 lg:pl-16 lg:pr-40 px-4 pb-24 bg-blue rounded-3xl lg:rounded-tr-[48px] lg:rounded-tl-[48px] flex lg:flex-row justify-between items-center flex-col gap-8 ">
        <div className="max-w-[510px]">
          <h2 className="text-white font-semibold text-3xl lg:text-5xl mb-4 uppercase">
            Join our KicksPlus Club & get 15% off
          </h2>
          <p className="mb-8 text-gray font-medium text-base lg:text-xl">
            Sign up for free! Join the community.
          </p>

          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Email address"
              className="h-12 w-full pl-4 bg-transparent border border-white rounded-lg text-white transition placeholder:text-gray outline-none focus:border-yellow"
            />
            <button className="bg-dark_gray h-12 w-32 uppercase text-white rounded-lg transition-all hover:bg-zinc-950">
              Submit
            </button>
          </div>
        </div>

        <div className="w-[191.28px] h-[47.96px] lg:w-[367px] lg:h-[112px] mr-auto lg:mr-0">
          <Image src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
