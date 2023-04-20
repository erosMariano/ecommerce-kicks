import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowIcon from "../../assets/icons/arrow_forward.svg";
export function JoinInTheClub() {
  return (
    <div className="bg-white py-6 px-8 rounded-2xl flex flex-col flex-1 max-w-[44rem]">
      <h2 className="text-4xl font-semibold mb-6 text-dark_gray">Join Kicks Club Get Rewarded Today.</h2>
      <p className="text-dark_gray font-sans font-semibold opacity-80 mb-6">
        As kicks club member you get rewarded with what you love for doing what
        you love. Sign up today and receive immediate access to these Level 1
        benefits:
      </p>

      <ul className="text-dark_gray font-sans font-semibold opacity-80 mb-6">
        <li>• Free shipping</li>
        <li>• A 15% off voucher for your next purchase</li>
        <li>• Access to Members Only products and sales</li>
        <li>• Access to adidas Running and Training apps</li>
        <li>• Special offers and promotions</li>
      </ul>
      <p className="text-dark_gray font-sans font-semibold opacity-80 mb-16">
        Join now to start earning points, reach new levels and unlock more
        rewards and benefits from adiClub.
      </p>

      <Link href="" className="rounded-lg bg-dark_gray h-12 flex justify-between items-center px-4 text-white uppercase">
        Join the club <Image src={ArrowIcon} alt="" width={16} height={16}/>
      </Link>
    </div>
  );
}
