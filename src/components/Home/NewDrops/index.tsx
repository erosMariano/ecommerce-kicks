import BlueButton from "@/components/BlueButton";
import React from "react";
import ItemsDrops from "./ItemsDrops";

import AdidasDrop1 from "../../../assets/tenis/adidasDrop1.png";
import AdidasDrop2 from "../../../assets/tenis/adidasDrop2.png";
import AdidasDrop3 from "../../../assets/tenis/adidasDrop3.png";
import AdidasDrop4 from "../../../assets/tenis/adidasDrop4.png";

function NewDrops() {
  return (
    <section className="py-24">
      <div className="max-w-[84.5rem] mx-auto">
        <div className="flex justify-between items-end text-dark_gray uppercase mb-8">
          <h2 className="text-7xl max-w-[589px] font-bold">
            Don&apos;t miss out new drops
          </h2>
          <BlueButton text="Shop New Drops" urlRedirect={"/"} />
        </div>

        <div className="flex justify-between gap-4">
          <ItemsDrops
            imgUrl={AdidasDrop1}
            price={125}
            slug=""
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
          <ItemsDrops
            imgUrl={AdidasDrop2}
            price={125}
            slug=""
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
          <ItemsDrops
            imgUrl={AdidasDrop3}
            price={125}
            slug=""
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
          <ItemsDrops
            imgUrl={AdidasDrop4}
            price={125}
            slug=""
            title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          />
        </div>
      </div>
    </section>
  );
}

export default NewDrops;
