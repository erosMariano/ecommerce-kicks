import { Header } from "@/components/Header";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewDrops from "@/components/Home/NewDrops";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${rubik.className}`}>
      <Header />
      <Hero />
      <NewDrops />

      <Categories />
    </main>
  );
}
