import Image from "next/image";
import ArrowNext from "../../../assets/icons/arrowNext.svg";
import ArrowPrev from "../../../assets/icons/arrowPrev.svg";
import ArrowTrend from "../../../assets/icons/arrowTrending.svg";

import LifeStyleShoe from "../../../assets/tenis/life_style_tenis.png";
import ShoesBasket from "../../../assets/tenis/backet_style_tenis.png";
import Link from "next/link";

function Categories() {
  return (
    <section className="px-4 bg-dark_gray">
      <div className="max-w-[84.5rem] mx-auto pt-24">
        <div className="flex justify-between items-end pb-14">
          <h2 className="text-white text-7xl uppercase font-semibold">
            Categories
          </h2>
          <div className="flex gap-4">
            <button className="bg-white p-3 rounded-lg opacity-50">
              <Image width={16} height={16} alt="" src={ArrowPrev} />
            </button>
            <button className="bg-white p-3 rounded-lg">
              <Image width={16} height={16} alt="" src={ArrowNext} />
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="bg-[#ECEEF0] w-[43.125rem] rounded-tl-[64px]">
            <Image
              width={480}
              height={600}
              alt=""
              src={LifeStyleShoe}
              className="block mx-auto"
            />

            <div className="flex justify-between  pl-8 pr-14 items-end">
              <h4 className="uppercase text-dark_gray font-bold text-4xl w-[11.9375rem] mb-8">
                Lifestyle Shoes
              </h4>
              <Link href="/product/1" className="bg-dark_gray p-2 rounded-lg mb-8 transition-all hover:bg-zinc-950">
                <Image width={32} height={32} alt="Lifestyle Shoes" src={ArrowTrend} />
              </Link>
            </div>
          </div>

          <div className="bg-[#F6F6F6] w-[43.125rem] rounded-tr-[64px]">
            <Image
              width={480}
              height={600}
              alt="Basketball
              Shoes"
              src={ShoesBasket}
              className="block mx-auto"
            />

            <div className="flex justify-between  pl-8 pr-14 items-end">
              <h4 className="uppercase text-dark_gray font-bold text-4xl w-[191px] mb-8">
                Basketball Shoes
              </h4>
              <Link href="/product/2" className="bg-dark_gray p-2 rounded-lg mb-8 transition-all hover:bg-zinc-950">
                <Image width={32} height={32} alt="" src={ArrowTrend} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
