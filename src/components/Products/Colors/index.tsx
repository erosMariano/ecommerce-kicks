import React, { useState } from "react";

interface ColorsProps {
  colors: [
    {
      code: string;
      name: string;
    }
  ];
  setColor: (color: string) => void;
}
function Colors({ colors, setColor }: ColorsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleActiveColor(index: number) {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setColor(colors[index].name);
    }
  }

  return (
    <div className="my-8">
      <h3 className="font-semibold text-dark_gray text-base uppercase">
        Color
      </h3>
      <div className="flex items-center gap-2 mt-2">
        {colors.map((cor, index) => (
          <span
            key={index}
            className={`transition-all rounded-full w-12 h-12 flex items-center justify-center border-[3px]`}
            style={{ borderColor: activeIndex === index ? cor.code : "transparent" }}
          >
            <button
              onClick={() => handleActiveColor(index)}
              className={`bg-${cor} w-8 h-8 rounded-full`}
              style={{ backgroundColor: cor.code }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Colors;
