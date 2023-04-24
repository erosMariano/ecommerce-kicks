import BlueButton from "@/components/BlueButton";
import React from "react";
import ItemReview from "./ItemsReview";

import ImagePoster1 from "../../../assets/tenis/photo_review1.png";
import ImagePoster2 from "../../../assets/tenis/photo_review2.png";
import ImagePoster3 from "../../../assets/tenis/photo_review3.png";

import Person1 from "../../../assets/person1.png";
import Person2 from "../../../assets/person2.png";
import Person3 from "../../../assets/person3.png";

function Review() {
  return (
    <section className="pt-0 lg:pt-24 pb-6 lg:pb-24">
      <div className="max-w-[84.5rem] mx-auto pt-6 lg:pt-24 px-4">
        <div className="flex justify-between items-end uppercase mb-6 lg:mb-12">
          <h2 className="text-2xl lg:text-7xl max-w-[36.8125rem] font-bold text-dark_gray">
            Reviews
          </h2>
          <BlueButton text="See a ll" urlRedirect={"/"} />
        </div>

        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <ItemReview
            quantityStar={5}
            imgUrlPoster={ImagePoster1}
            photoUser={Person1}
            title="Good Quality"
            description="I recommend buying from kicks they are very good"
          />
          <ItemReview
            quantityStar={5}
            imgUrlPoster={ImagePoster2}
            photoUser={Person2}
            title="High Quality"
            description="Find your perfect pair at Kicks - exceptional quality guaranteed."
          />
          <ItemReview
            quantityStar={5}
            imgUrlPoster={ImagePoster3}
            photoUser={Person3}
            title="Top-notch"
            description="For top-quality shoes, Kicks is the way to go.
"
          />
        </div>
      </div>
    </section>
  );
}

export default Review;
