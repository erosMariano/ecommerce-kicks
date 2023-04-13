import React from "react";
import Link from "next/link";
import Logo from "../../assets/logo_header.svg";
import Image from "next/image";

import Lupa from "../../assets/icons/lupa.svg";
import User from "../../assets/icons/user.svg";

export function Header() {
  return (
    <header className={`max-w-[84.5rem] mx-auto px-4`}>
      <div className="p-8 flex justify-between bg-fa_white rounded-3xl	mt-8">
        <div className="flex gap-10 font-bold items-center">
          <Link href="/">New Drops 🔥</Link>
          <Link href="/">Men</Link>
          <Link href="/">Women</Link>
        </div>

        <Link href="/">
          <Image src={Logo} width={128} height={32} alt="Logo kicks" />
        </Link>

        <div className="flex gap-10 items-center w-[301px] justify-end">
          <Image src={Lupa} width={24} height={24} alt="Ícone de lupa" />
          <Image src={User} width={24} height={24} alt="Ícone de usuário" />
          <span className="bg-yellow w-8 h-8 flex items-center justify-center rounded-full font-semibold">
            0
          </span>
        </div>
      </div>
    </header>
  );
}
