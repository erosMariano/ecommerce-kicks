import React from "react";
import Link from "next/link";
import Logo from "../../assets/logo_header.svg";
import Image from "next/image";

import Lupa from "../../assets/icons/lupa.svg";
import User from "../../assets/icons/user.svg";

export function Header() {
  return (
    <header className={`max-w-[84.5rem] mx-auto px-4`}>
      <div className="p-4 rounded-xl flex justify-between bg-fa_white mt-8 md:p-8 md:rounded-3xl relative items-center">
        <button className="md:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 4.75C2 4.55109 2.07902 4.36032 2.21967 4.21967C2.36032 4.07902 2.55109 4 2.75 4H17.25C17.4489 4 17.6397 4.07902 17.7803 4.21967C17.921 4.36032 18 4.55109 18 4.75C18 4.94891 17.921 5.13968 17.7803 5.28033C17.6397 5.42098 17.4489 5.5 17.25 5.5H2.75C2.55109 5.5 2.36032 5.42098 2.21967 5.28033C2.07902 5.13968 2 4.94891 2 4.75ZM2 10C2 9.80109 2.07902 9.61032 2.21967 9.46967C2.36032 9.32902 2.55109 9.25 2.75 9.25H17.25C17.4489 9.25 17.6397 9.32902 17.7803 9.46967C17.921 9.61032 18 9.80109 18 10C18 10.1989 17.921 10.3897 17.7803 10.5303C17.6397 10.671 17.4489 10.75 17.25 10.75H2.75C2.55109 10.75 2.36032 10.671 2.21967 10.5303C2.07902 10.3897 2 10.1989 2 10ZM2 15.25C2 15.0511 2.07902 14.8603 2.21967 14.7197C2.36032 14.579 2.55109 14.5 2.75 14.5H17.25C17.4489 14.5 17.6397 14.579 17.7803 14.7197C17.921 14.8603 18 15.0511 18 15.25C18 15.4489 17.921 15.6397 17.7803 15.7803C17.6397 15.921 17.4489 16 17.25 16H2.75C2.55109 16 2.36032 15.921 2.21967 15.7803C2.07902 15.6397 2 15.4489 2 15.25Z"
              fill="black"
            />
          </svg>
        </button>

        <div className="flex gap-8 font-bold items-center fixed w-full bg-white left-full top-0 h-screen flex-col justify-center md:relative md:w-auto md:h-auto md:flex-row md:left-0 md:bg-transparent">
          <Link href="/">New Drops 🔥</Link>
          <Link href="/">Men</Link>
          <Link href="/">Women</Link>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 w-20 h-5 md:w-32 md:h-8"
        >
          <Image src={Logo} alt="Logo kicks" />
        </Link>

        <div className="flex gap-2 md:gap-10 items-center w-[18.8125rem] justify-end">
          <Image
            src={Lupa}
            width={24}
            height={24}
            alt="Ícone de lupa"
            className="hidden md:block"
          />
          <Image src={User} width={24} height={24} alt="Ícone de usuário" />
          <span className="bg-yellow w-8 h-8 flex items-center justify-center rounded-full font-semibold">
            0
          </span>
        </div>
      </div>
    </header>
  );
}
