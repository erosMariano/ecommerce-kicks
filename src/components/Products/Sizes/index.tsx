import React, { useEffect, useState } from "react";

interface Size {}

interface SizeElementProps {
  sizes: {
    size: number;
    enable: boolean;
  }[];
  setSize: (size: number) => void;
}

function Sizes({ sizes, setSize }: SizeElementProps) {
  const listSizes = sizes.slice(0, sizes.length);

  const [selectedSize, setSelectedSize] = useState(
    listSizes.findIndex((size) => size.enable)
  );

  function handleSelectSize(index: number) {
    if (listSizes[index].enable) {
      if (index !== selectedSize) {
        setSelectedSize(index);
      }
    }
  }

  useEffect(() => {
    setSize(sizes[selectedSize].size);
  }, [selectedSize, setSize, sizes])
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
        {listSizes.map((size, index) => (
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
