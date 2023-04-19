import React from "react";

export function DeliveryOptions() {
  return (
    <div className="mt-8 max-w-[48.875rem]">
      <h2 className="font-semibold text-3xl text-dark_gray mb-6">
        Delivery Options{" "}
      </h2>

      <div className="bg-white p-4 rounded-2xl flex justify-between">
        <div>
          <h3 className="font-semibold text-xl text-dark_gray mb-2">
            Standard Delivery{" "}
          </h3>
          <p className="opacity-80 text-dark_gray font-semibold text-base">
            Enter your address to see when you&apos;ll get your order
          </p>
        </div>
        <span className="text-blue text-xl font-semibold block">$6.00</span>
      </div>

      <div className="bg-transparent p-4 rounded-2xl flex justify-between border border-dark_gray mt-6">
        <div>
          <h3 className="font-semibold text-xl text-dark_gray mb-2">
            Collect in store
          </h3>
          <p className="opacity-80 text-dark_gray font-semibold text-base">
            Pay now, collect in store
          </p>
        </div>
        <span className="text-dark_gray text-xl font-semibold block">Free</span>
      </div>

      <div className="mt-8 mb-11 gap-6 flex flex-col">
        <label
          htmlFor="check1"
          className="flex gap-2 items-center cursor-pointer"
        >
          <input
            id="check1"
            type="checkbox"
            className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
          />
          <span className="text-dark_gray text-base font-sans font-semibold">
            My billing and delivery information are the same
          </span>
        </label>

        <label
          htmlFor="check2"
          className="flex gap-2 items-center cursor-pointer"
        >
          <input
            id="check2"
            type="checkbox"
            className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
          />
          <span className="text-dark_gray text-base font-sans font-semibold">
            I&apos;m 13+ year old
          </span>
        </label>

        <div>
          <span className="font-semibold text-bases text-dark_gray">
            Also want product updates with our newsletter?
          </span>
          <label
            htmlFor="check3"
            className="flex gap-2 items-center cursor-pointer mt-2"
          >
            <input
              id="check3"
              type="checkbox"
              className="h-4 transition w-4 mr-2 cursor-pointer font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
            />
            <span className="text-dark_gray text-base font-sans font-semibold">
              Yes, I&apos;d like to receive emails about exclusive sales and
              more.
            </span>
          </label>

          <button type="submit" className="w-[22.625rem] h-12 rounded-lg flex items-center justify-center text-sm uppercase text-white bg-dark_gray mt-11">Review AND PAY</button>
        </div>
      </div>
    </div>
  );
}
