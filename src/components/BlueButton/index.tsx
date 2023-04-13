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
      className="px-8 py-4 bg-blue text-white rounded-lg transition-all hover:brightness-90 uppercase text-sm"
    >
      {text}
    </button>
  );
}

export default BlueButton;
