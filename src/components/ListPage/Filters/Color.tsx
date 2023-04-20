import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../../assets/icons/arrowBottom.svg";

export function Colors() {
  const [colors, setColors] = useState(true);

  
  return (
    <div>
    <div
      className="flex justify-between items-center mb-4 cursor-pointer"
      onClick={() => setColors((prevState) => !prevState)}
    >
      <h3 className="uppercase text-dark_gray text-base font-semibold">
        Color
      </h3>
      <Image
        src={ArrowBottom}
        alt=""
        width={24}
        height={24}
        className={`${colors ? "rotate-180" : "rotate-0"} transition-all`}
      />
    </div>
    <div
      className={`flex gap-4 flex-wrap ${
        colors ? "max-h-28" : "max-h-0"
      } overflow-hidden transition-all`}
    >
      <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-blue" />{" "}
      <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-slate-700" />
      <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-yellow" />
      <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-red-500" />
      <button className="w-12 h-12 rounded-lg font-medium transition-all text-dark_gray bg-amber-500" />
    </div>
  </div>
  )
}

