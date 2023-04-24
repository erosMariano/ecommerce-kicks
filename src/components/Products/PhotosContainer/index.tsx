import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import ArrowPrev from "../../../assets/icons/arrow-prev.svg";
import ArrowNext from "../../../assets/icons/arrow-next.svg";

interface PhotosContainerProps {
  images: string[] | StaticImageData[];
}
function PhotosContainer({ images }: PhotosContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col w-full h-80 xl:w-[600px]">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 rounded-2xl bg-[#ECEEF0] left-0 w-full h-full transition-opacity ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            width={400}
            height={400}
            src={slide}
            alt={`Imagem ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 button"
        onClick={handlePreviousSlide}
      >
        <Image src={ArrowPrev} alt="" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 button"
        onClick={handleNextSlide}
      >
        <Image src={ArrowNext} alt="" />
      </button>

      <div className="absolute -bottom-20 left-0 w-full flex justify-start pt-4">
        {images.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 h-16 w-16 rounded-xl transition-opacity bg-white ${
              index === currentSlide ? "opacity-100 bg-gray-300" : "opacity-50"
            }`}
          >
            <Image
              width={50}
              height={50}
              src={slide}
              alt={`Imagem ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default PhotosContainer;
