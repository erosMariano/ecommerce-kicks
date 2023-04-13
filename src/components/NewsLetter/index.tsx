import Image from "next/image";
import React from "react";

import Logo from "../../assets/logo_newsletter.svg";
function NewsLetter() {
  return (
    <section>
      <div className="max-w-[84.5rem] mx-auto pt-16 pl-16 pr-40 pb-20 bg-blue rounded-tr-[48px] rounded-tl-[48px] flex justify-between items-center ">
        <div className="max-w-[510px]">
          <h2 className="text-white font-semibold text-5xl mb-4 uppercase">
            Join our KicksPlus Club & get 15% off
          </h2>
          <p className="mb-8 text-gray font-medium text-xl">
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

        <div>
          <Image src={Logo} width={367} height={112} alt="" />
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
