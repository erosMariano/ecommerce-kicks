import React from "react";
interface ButtonProps {
  text: string;
}
function BlueButton({ text }: ButtonProps) {
  return (
    <button className="px-8 py-4 bg-blue text-white rounded-lg transition-all hover:brightness-90">
      {text}
    </button>
  );
}

export default BlueButton;
