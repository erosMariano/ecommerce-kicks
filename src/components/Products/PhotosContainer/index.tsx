import Image, { StaticImageData } from "next/image";
import React from "react";

interface PhotosContainerProps {
  images: string[] | StaticImageData[];
}
function PhotosContainer({ images }: PhotosContainerProps) {
  return (
    <div className="flex gap-4 flex-wrap max-w-[874px]">
      {images.map((image, index) => (
        <Image
          src={image}
          alt=""
          width={429}
          height={510}
          key={index}
          className={`${index === 0 && "rounded-tl-[24px]"} ${
            index === 1 && "rounded-tr-[24px]"
          } ${index === 2 && "rounded-bl-[24px]"} ${
            index === 3 && "rounded-br-[24px]"
          }`}
        />
      ))}
    </div>
  );
}

export default PhotosContainer;
