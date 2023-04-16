import React, { useState } from "react";

interface Size {
  size: number;
  enable: boolean;
}

interface SizeElementProps {
  sizes: Size[];
}

function Sizes({ sizes }: SizeElementProps) {
  const [selectedSize, setSelectedSize] = useState(
    sizes.findIndex((size) => size.enable)
  );

  function handleSelectSize(index: number) {
    if (sizes[index].enable) {
      if (index !== selectedSize) {
        setSelectedSize(index);
      }
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-dark_gray text-base uppercase mb-2">
          Size
        </h3>
        <span className="text-dark_gray text-[14px] underline font-medium uppercase">
          Size chart
        </span>
      </div>

      <div className="flex gap-1">
        {sizes.map((size, index) => (
          <button
            onClick={() => handleSelectSize(index)}
            className={`w-12 h-12 rounded-lg font-medium transition-all ${
              selectedSize === index
                ? "bg-dark_gray text-white"
                : "text-dark_gray bg-white"
            } ${
              !size.enable && "bg-zinc-300 text-zinc-400 cursor-not-allowed"
            }`}
            key={size.size}
          >
            {size.size}
          </button>
        ))}
      </div>
    </>
  );
}

export default Sizes;
