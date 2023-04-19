import { InputElement } from "@/components/InputElement";
import Link from "next/link";
import React from "react";
import Product from "../../../assets/product/product-details1.png";
import Image from "next/image";
import { DeliveryOptions } from "../DeliveryOptions";
function ContactDetails() {
  return (
    <div className="py-5 my-8 flex gap-12">
      <form className="flex flex-col flex-1">
        <Link
          href=""
          className="mb-8 font-sans font-semibold underline text-dark_gray block"
        >
          Login and Checkout faster
        </Link>

        <h2 className="font-semibold text-3xl text-dark_gray mb-1">
          Contact Details
        </h2>
        <p className="font-sans font-semibold text-base text-dark_gray opacity-80 mb-8">
          We will use these details to keep you inform about your delivery.
        </p>

        <span className="w-[21.375rem] block mb-8">
          <InputElement placeholder="Email" type="email" />
        </span>

        <div className="max-w-[44rem] flex flex-col gap-5">
          <h2 className="font-semibold text-3xl text-dark_gray mb-3">
            Shipping Address
          </h2>

          <div className="flex gap-5">
            <InputElement placeholder="First Name*" type="text" />
            <InputElement placeholder="Last Name*" type="text" />
          </div>
          <label htmlFor="">
            <InputElement placeholder="Find Delivery Address*" type="text" />
            <span className="font-sans text-xs text-dark_gray">
              Start typing your street address or zip code for suggestion
            </span>
          </label>

          <label htmlFor="">
            <InputElement placeholder="Phone Number*" type="number" />
            <span className="font-sans text-xs text-dark_gray">
              E.g. (123) 456-7890
            </span>
          </label>
        </div>

        <DeliveryOptions />
      </form>

      <div className="w-[29.125rem]">
        <div className="bg-white p-6 rounded-3xl mb-12">
          {" "}
          <h2 className="font-semibold text-3xl text-dark_gray mb-6">
            Order Summary
          </h2>
          <div className="flex-col flex gap-4 flex-1 bg-white">
            <div className="flex justify-between">
              <span className="text-xl font-semibold font-sans  text-dark_gray">
                1 ITEM
              </span>
              <span className="text-xl font-semibold font-sans text-dark_gray opacity-80">
                $130.00
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-xl font-semibold font-sans  text-dark_gray">
                Delivery{" "}
              </span>
              <span className="text-xl font-semibold font-sans text-dark_gray opacity-80">
                $6.99
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-semibold font-sans text-dark_gray">
                Sales Tax
              </span>
              <span className="text-xl font-semibold font-sans text-dark_gray opacity-80">
                -
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-2xl font-bold font-sans text-dark_gray">
                Total
              </span>
              <span className="text-2xl font-bold font-sans text-dark_gray opacity-80">
                $130.00
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl">
          <h2 className="font-semibold text-2xl text-dark_gray mb-6">
            Order Details
          </h2>

          <div className="flex gap-6">
            <Image
              src={Product}
              alt=""
              className="w-[138.55px] object-cover rounded-3xl"
            />

            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-xl text-dark_gray mb-2">
                  DROPSET TRAINER SHOES
                </h3>
                <span className="text-bases font-semibold font-sans text-dark_gray opacity-80 mb-1 block">
                  Men&apos;s Road Running Shoes{" "}
                </span>
                <span className="text-bases font-semibold font-sans text-dark_gray opacity-80">
                  Enamel Blue/ University White
                </span>
              </div>

              <div className="flex gap-10">
                <span className="text-bases font-semibold font-sans text-dark_gray opacity-80">
                  Size 10
                </span>
                <span className="text-bases font-semibold font-sans text-dark_gray opacity-80">
                  Quantity 1
                </span>
              </div>
              <span className="text-blue text-xl font-semibold mt-4 block">
                $130.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
