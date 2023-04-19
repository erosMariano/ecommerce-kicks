import ContactDetails from "@/components/Checkout/ContactDetails";
import { DeliveryOptions } from "@/components/Checkout/DeliveryOptions";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function Checkout() {
  return (
    <>
      <Header />
      <main className={`${rubik.className}`}>
        <section className="max-w-[84.5rem] mx-auto px-4">
          <ContactDetails />
        </section>
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
