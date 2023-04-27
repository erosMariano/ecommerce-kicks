import Image from "next/image";

import BlueButton from "@/components/BlueButton";
import { urlFor } from "../../../../lib/client";

interface HeroProps {
  slug: string;
  images: object[];
}
function Hero({ images, slug }: HeroProps) {
  return (
    <section className="max-w-[84.5rem] mx-auto px-4">
      <h1 className="text-[3rem] md:text-[5rem] lg:text-[10rem] text-center xl:text-[223.5px] uppercase font-bold">
        Do it <span className="text-blue">right</span>
      </h1>

      <div className="relative">
        <div className="relative h-[400px] md:h-[750px] flex items-end w-full">
          <div className="absolute w-full h-[400px] md:h-[750px] rounded-3xl lg:rounded-[64px] overflow-hidden -z-10">
            <Image
              src={urlFor(images[0]).toString()}
              fill
              alt=""
              quality={100}
              className="object-cover"
            />
          </div>

          <h5 className="absolute bg-dark_gray p-2 lg:p-6 text-gray font-semibold text-xs lg:text-base rotate-[270deg] left-[-62px] lg:left-[-82px] top-[86px] lg:top-[162px] rounded-b-lg lg:rounded-b-2xl">
            Nike product of the year{" "}
          </h5>
          <div className="w-[235px] lg:w-[490px] ml-4 lg:ml-12  pb-4 lg:pb-12">
            <h2 className="text-white font-semibold text-xl lg:text-7xl">
              NIKE AIR MAX
            </h2>
            <p className="text-white font-semibold text-sm lg:text-2xl font-sans mb-6">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <BlueButton urlRedirect={`/product/${slug}`} text="Shop now" />
          </div>
        </div>

        <div className="absolute right-4 lg:right-8 bottom-8 flex gap-4 flex-col ">
          <div className="relative w-16 h-16 lg:w-40 lg:h-40">
            <Image
              src={urlFor(images[1]).toString()}
              alt=""
              fill
              quality={100}
              className="rounded-lg lg:rounded-[32px] border-[1px] lg:border-[3px]  border-gray"
            />
          </div>
          <div className="w-16 h-16 lg:w-40 lg:h-40">
            <Image
              src={urlFor(images[2]).toString()}
              className="rounded-lg lg:rounded-[32px] border-[1px] lg:border-[3px] border-gray"
              width={160}
              height={160}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
