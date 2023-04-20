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
import Head from "next/head";

const rubik = Rubik({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Head>
        <title>Cadastro - Kicks</title>
      </Head>
      <Header />
      <main className={`${rubik.className}`}>
        <section className="max-w-[84.5rem] mx-auto px-4 flex gap-12 mt-8 mb-6 items-start">
          <div className="w-[544px] px-10">
            <div>
              <h2 className="text-3xl font-semibold  text-dark_gray mb-2">
                Register
              </h2>
              <Link href="#" className="font-sans text-base font-semibold">
                Sign up with
              </Link>
            </div>

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
            <span className="block font-sans text-base font-semibold uppercase my-6">
              OR
            </span>

            <form className="flex flex-col">
              <h3 className="text-2xl font-semibold  text-dark_gray mb-5">
                Your Name
              </h3>

              <div className="flex flex-col gap-5">
                <InputElement placeholder="First Name" type="text" />
                <InputElement placeholder="Last Name" type="text" />
              </div>

              <h3 className="text-2xl font-semibold  text-dark_gray mb-5 mt-6">
                Gender
              </h3>

              <div className="flex gap-8 items-center">
                <label
                  htmlFor="check1"
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id="check1"
                    type="checkbox"
                    className="h-4 w-4 transition cursor-pointer  font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
                  />
                  <span className="text-dark_gray text-base font-sans font-semibold w-auto block">
                    Male
                  </span>
                </label>

                <label
                  htmlFor="check2"
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id="check2"
                    type="checkbox"
                    className="h-4 w-4 transition cursor-pointer  font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
                  />
                  <span className="text-dark_gray text-base font-sans font-semibold w-auto block">
                    Female
                  </span>
                </label>

                <label
                  htmlFor="check3"
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id="check3"
                    type="checkbox"
                    className="h-4 w-4 transition cursor-pointer  font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
                  />
                  <span className="text-dark_gray text-base font-sans font-semibold w-auto block">
                    Other
                  </span>
                </label>
              </div>

              <h3 className="text-2xl font-semibold  text-dark_gray mb-5 mt-6">
                Login Details
              </h3>

              <div className="flex flex-col gap-5">
                <InputElement placeholder="Email" type="email" />
                <div>
                  <InputElement placeholder="Password" type="password" />
                  <span className="font-sans text-xs text-dark_gray">
                    Minimum 8 characters with at least one uppercase, one
                    lowercase, one special character and a number
                  </span>
                </div>
              </div>

              <label
                htmlFor="check5"
                className="flex mt-6 gap-2 items-center cursor-pointer"
              >
                <input
                  id="check5"
                  type="checkbox"
                  className="h-4 w-4 transition cursor-pointer  font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
                />
                <span className="text-dark_gray text-base font-sans font-semibold w-full block">
                  By clicking &apos;Log In&apos; you agree to our website
                  KicksClub Terms & Conditions, Kicks Privacy Notice and Terms &
                  Conditions.
                </span>
              </label>

              <label
                htmlFor="check4"
                className="flex mt-6 gap-2 items-center cursor-pointer"
              >
                <input
                  id="check4"
                  type="checkbox"
                  className="h-4 w-4 transition cursor-pointer  font-medium border-2 border-solid border-#000000 rounded appearance-none checked:bg-yellow checked:border-yellow-400 checked:text-white"
                />
                <span className="text-dark_gray text-base font-sans font-semibold w-full block">
                  Keep me logged in - applies to all log in options below. More
                  info
                </span>
              </label>
              <button className="rounded-lg mt-6 bg-dark_gray h-12 flex justify-between items-center px-4 text-white uppercase">
                Register
                <Image src={ArrowIcon} alt="" width={16} height={16} />
              </button>
            </form>
          </div>
          <JoinInTheClub />
        </section>
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
