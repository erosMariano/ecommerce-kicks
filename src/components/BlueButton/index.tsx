import { useRouter } from "next/router";
import React from "react";
interface ButtonProps {
  text: string;
  urlRedirect: string;
}
function BlueButton({ text, urlRedirect }: ButtonProps) {
  const router = useRouter();

  function handleRedirectUser() {
    router.push(`/${urlRedirect}`);
  }
  return (
    <button
      onClick={handleRedirectUser}
      className="py-3 px-4 lg:px-8 w-max lg:py-4 bg-blue text-white rounded-lg transition-all hover:brightness-90 uppercase text-sm"
    >
      {text}
    </button>
  );
}

export default BlueButton;
