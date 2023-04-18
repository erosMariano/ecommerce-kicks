import React from "react";
import Link from "next/link";
import Logo from "../../assets/logo_header.svg";
import Image from "next/image";

import Lupa from "../../assets/icons/lupa.svg";
import User from "../../assets/icons/user.svg";
import Bar from "../../assets/icons/bar.svg";

export function Header() {
  return (
    <header className={`max-w-[84.5rem] mx-auto px-4`}>
      <div className="p-4 rounded-xl flex justify-between bg-fa_white mt-8 md:p-8 md:rounded-3xl relative items-center">
        <button className="md:hidden">
          <Image src={Bar} alt=""/>
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
