import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "../components/Header";
import Foot from "../components/foot";
import Order from "../components/order";
import Hero from "../components/hero";
import Business from "../components/business";
import Gallery from "../components/gallery";
import Services from "../components/services";
import Contacts from "../components/contacts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="cursor-point"></div>
      <div className="wrapper">
        <Header />
        {/* <Order /> */}
        <main className="main">
          <div className="horizontal-scroll-container">
            <Hero />
            <Business />
          </div>
          <Gallery />
          <Services />
          <Contacts />
        </main>
        {/* <Foot /> */}
      </div>
      {/* <div className="scroll-up">
          <div className="scroll-up__container container">
            <a
              className="scroll-up__link"
              href="#hero"
              data-anchor-position="0vw"
            >
              <ArrowUpIcon />
            </a>
          </div>
        </div> */}
    </>
  );
}
