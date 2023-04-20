import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { InputElement } from "@/components/InputElement";
import { JoinInTheClub } from "@/components/JoinTheClub";
import NewsLetter from "@/components/NewsLetter";
import ArrowIcon from "../assets/icons/arrow_forward.svg";

import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import GoogleIcon from "../assets/icons/google.svg";
import AppleIcon from "../assets/icons/apple.svg";
import FacebookIcon from "../assets/icons/facebook2.svg";

const rubik = Rubik({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Header />
      <main className={`${rubik.className}`}>
        <section className="max-w-[84.5rem] mx-auto px-4 flex gap-12 mt-8 mb-14">
          <div className="w-[544px] px-10">
            <form className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-semibold  text-dark_gray mb-2">
                  Login
                </h2>
                <Link href="#" className="font-sans text-base font-semibold">
                  Forgot your password?
                </Link>
              </div>
              <InputElement placeholder="Email" type="email" />
              <InputElement placeholder="Email" type="email" />

              <label
                htmlFor="check1"
                className="flex gap-2 items-center cursor-pointer"
              >
                <input
                  id="check1"
                  type="checkbox"
                  className="h-4 w-4 transition cursor-pointer  font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
                />
                <span className="text-dark_gray text-base font-sans font-semibold w-full block">
                  Keep me logged in - applies to all log in options below. More
                  info
                </span>
              </label>
              <Link
                href=""
                className="rounded-lg bg-dark_gray h-12 flex justify-between items-center px-4 text-white uppercase"
              >
                Email Login{" "}
                <Image src={ArrowIcon} alt="" width={16} height={16} />
              </Link>
            </form>

            <div className="flex gap-6 justify-between mt-6">
              <button className="px-12 py-4 rounded-xl border border-dark_gray">
                <Image src={GoogleIcon} width={32} height={32} alt="" />
              </button>
              <button className="px-12 py-4 rounded-xl border border-dark_gray">
                <Image src={AppleIcon} width={32} height={32} alt="" />
              </button>
              <button className="px-12 py-4 rounded-xl border border-dark_gray">
                <Image src={FacebookIcon} width={32} height={32} alt="" />
              </button>
            </div>

            <p className="text-dark_gray text-base font-sans font-semibold w-full block mt-6">
              By clicking &apos;Log In&apos; you agree to our website KicksClub Terms &
              Conditions, Kicks Privacy Notice and Terms & Conditions.
            </p>
          </div>
          <JoinInTheClub />
        </section>
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
