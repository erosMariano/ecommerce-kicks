import Image from "next/image";
import ArrowNext from "../../../assets/icons/arrowNext.svg";
import ArrowPrev from "../../../assets/icons/arrowPrev.svg";
import ArrowTrend from "../../../assets/icons/arrowTrending.svg";

import LifeStyleShoe from "../../../assets/tenis/life_style_tenis.png";
import ShoesBasket from "../../../assets/tenis/backet_style_tenis.png";
import Link from "next/link";

function Categories() {
  return (
    <section className="pl-4 lg:px-4 bg-dark_gray">
      <div className="max-w-[84.5rem] mx-auto pt-6 lg:pt-24">
        <div className="flex justify-between items-end pb-6 lg:pb-14 pr-4">
          <h2 className="text-white text-2xl lg:text-7xl uppercase font-semibold">
            Categories
          </h2>
          <div className="flex gap-4">
            <button className="bg-white p-2 lg:p-3 rounded-lg opacity-50">
              <Image width={16} height={16} alt="" src={ArrowPrev} />
            </button>
            <button className="bg-white p-2 lg:p-3 rounded-lg">
              <Image width={16} height={16} alt="" src={ArrowNext} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-end">
          <div className="bg-[#ECEEF0] w-full lg:w-[43.125rem] rounded-tl-3xl lg:rounded-tl-[64px]">
            <Image
              width={480}
              alt=""
              src={LifeStyleShoe}
              className="block mx-auto rounded-full h-[348px] lg:h-[600px] object-cover"
            />

            <div className="flex justify-between px-4 lg:pl-8 lg:pr-14 items-end">
              <h4 className="uppercase text-dark_gray font-bold text-2xl lg:text-4xl w-[11.9375rem] mb-8">
                Lifestyle Shoes
              </h4>
              <Link
                href="/product/1"
                className="bg-dark_gray p-2 rounded-lg mb-8 transition-all hover:bg-zinc-950"
              >
                <Image
                  alt="Lifestyle Shoes"
                  src={ArrowTrend}
                  className="w-4 lg:w-8"
                />
              </Link>
            </div>
          </div>

          <div className="bg-[#F6F6F6] w-full lg:w-[43.125rem] lg:rounded-tr-[64px]">
            <Image
              alt="Basketball
              Shoes"
              src={ShoesBasket}
              className="block mx-auto h-[348px] lg:h-[600px] object-cover"
            />

            <div className="flex justify-between  px-4 lg:pl-8 lg:pr-14 items-end">
              <h4 className="uppercase text-dark_gray font-bold text-2xl lg:text-4xl w-[191px] mb-8">
                Basketball Shoes
              </h4>
              <Link
                href="/product/2"
                className="bg-dark_gray p-2 rounded-lg mb-8 transition-all hover:bg-zinc-950"
              >
                <Image
                  width={32}
                  height={32}
                  alt=""
                  src={ArrowTrend}
                  className="w-4 lg:w-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
