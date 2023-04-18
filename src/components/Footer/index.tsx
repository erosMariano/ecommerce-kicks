import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/logo_footer.svg";

import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import TikTokIcon from "../../assets/icons/tiktok.svg";

function Footer() {
  return (
    <footer className="-mt-10">
      <div className="max-w-[84.5rem] mx-auto pt-16 pl-16 bg-dark_gray rounded-tr-[48px] rounded-tl-[48px] flex gap-32 pb-80 relative">
        <div className="w-[27.875rem]">
          <h4 className="text-yellow font-semibold text-4xl mb-1">About us</h4>
          <p className="text-gray text-xl font-normal">
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>
        </div>

        <nav className="flex justify-between gap-32">
          <ul>
            <h4 className="text-yellow font-semibold mb-4 text-2xl">
              Categories
            </h4>
            <div className="flex flex-col gap-2">
              <li className="text-gray text-xl">
                <Link href="/">Runners</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Sneakers</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Basketball</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Outdoor</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Golf</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Hiking</Link>
              </li>
            </div>
          </ul>

          <ul>
            <h4 className="text-yellow font-semibold mb-4 text-2xl">Company</h4>
            <div className="flex flex-col gap-2">
              <li className="text-gray text-xl">
                <Link href="/">About</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Contact</Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">Blogs</Link>
              </li>
            </div>
          </ul>

          <ul>
            <h4 className="text-yellow font-semibold mb-4 text-2xl">
              Follow us
            </h4>
            <div className="flex gap-6">
              <li className="text-gray text-xl">
                <Link href="/">
                  <Image src={FacebookIcon} width={24} height={24} alt="" />
                </Link>
              </li>
              <li className="text-gray text-xl">
                <Link href="/">
                  <Image src={InstagramIcon} width={24} height={24} alt="" />
                </Link>
              </li>

              <li>
                <Link href="/">
                  <Image src={TwitterIcon} width={24} height={24} alt="" />
                </Link>
              </li>

              <li>
                <Link href="/">
                  <Image src={TikTokIcon} width={24} height={24} alt="" />
                </Link>
              </li>
            </div>
          </ul>
        </nav>

        <Image
          src={Logo}
          width={1262}
          height={313.66}
          alt=""
          className="absolute bottom-0 left-2/4 -translate-x-1/2"
        />
      </div>
    </footer>
  );
}

export default Footer;
