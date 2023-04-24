import React from "react";

interface TagProps {
  name: string;
}
function Tag({ name }: TagProps) {
  return (
    <span className="block w-fit py-2 xl:py-3 px-4 bg-blue text-white text-[12px] font-semibold rounded-xl">
      {name}
    </span>
  );
}

export default Tag;
