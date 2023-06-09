import BlueButton from "@/components/BlueButton";
import React from "react";

import AdidasDrop1 from "../../../assets/tenis/adidasDrop1.png";
import AdidasDrop2 from "../../../assets/tenis/adidasDrop2.png";
import AdidasDrop3 from "../../../assets/tenis/adidasDrop3.png";
import AdidasDrop4 from "../../../assets/tenis/adidasDrop4.png";
import CardProduct from "@/components/CardProduct";

function NewDrops() {
  return (
    <section className="py-6 lg:py-24">
      <div className="max-w-[84.5rem] mx-auto  px-4">
        <div className="flex justify-between items-center gap-4 lg:items-end text-dark_gray uppercase mb-8">
          <h2 className="text-2xl flex flex-1 lg:text-7xl max-w-full xl:max-w-[589px] font-bold">
            Don&apos;t miss out new drops
          </h2>
          <BlueButton text="Shop New Drops" urlRedirect={"/product-list"} />
        </div>

        <div className="flex justify-between gap-6 lg:gap-4 flex-col lg:flex-row">
          <CardProduct
            imgUrl={AdidasDrop1}
            price={125}
            slug="1"
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
          <CardProduct
            imgUrl={AdidasDrop2}
            price={125}
            slug="2"
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
          <CardProduct
            imgUrl={AdidasDrop3}
            price={125}
            slug="3"
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
          <CardProduct
            imgUrl={AdidasDrop4}
            price={125}
            slug="4"
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
        </div>
      </div>
    </section>
  );
}

export default NewDrops;
