import { Header } from "@/components/Header";
import Hero from "@/components/Home/Hero";
import NewDrops from "@/components/Home/NewDrops";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`max-w-[84.5rem] mx-auto px-4 ${rubik.className}`}>
      <Header />
      <Hero />
      <NewDrops />
    </main>
  );
}
