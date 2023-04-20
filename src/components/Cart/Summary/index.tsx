import { useRouter } from "next/router";
import React from "react";

function Summary() {
  const route = useRouter()
  function handleSendCheckout(){
    route.push("/checkout")
  }
  return (
    <div className="flex flex-1 w-full flex-col">
      <h2 className="font-semibold text-3xl mb-2 text-dark_gray">
        Order Summary
      </h2>

      <div className="flex-col flex gap-4 flex-1">
        <div className="flex justify-between">
          <span className="text-xl font-bold font-sans  text-dark_gray">
            1 ITEM
          </span>
          <span className="text-xl font-semibold font-sans text-dark_gray opacity-80">$130.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-xl font-bold font-sans  text-dark_gray">
            Delivery{" "}
          </span>
          <span className="text-xl font-semibold font-sans text-dark_gray opacity-80">$6.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold font-sans text-dark_gray">
            1 ITEM
          </span>
          <span className="text-xl font-semibold font-sans text-dark_gray opacity-80">-</span>
        </div>

        <div className="flex justify-between">
          <span className="text-2xl font-bold font-sans text-dark_gray">
            Total
          </span>
          <span className="text-2xl font-bold font-sans text-dark_gray opacity-80">$136.99</span>
        </div>
        <button onClick={handleSendCheckout} className="w-full flex items-center justify-center bg-dark_gray text-sm uppercase text-white py-4 rounded-lg transition-all hover:bg-zinc-950 mt-7">Checkout</button>
      </div>
    </div>
  );
}

export default Summary;
