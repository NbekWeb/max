import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import isTouch from "@/utils/isTouch";

import Header from "../components/Header";
import Foot from "../components/foot";
import Order from "../components/order";
import Hero from "../components/hero";
import Business from "../components/business";
import Gallery from "../components/gallery";
import Services from "../components/services";
import Contacts from "../components/contacts";

gsap.registerPlugin(ScrollTrigger);





export default function Home() {
  useEffect(() => {
    const cursorPoint = document.querySelector(".cursor-point");

    function setCoordMouse(e) {
      gsap.to(cursorPoint, {
        left: e.clientX,
        top: e.clientY,
        stagger: 0.05,
        duration: 0.25,
      });
    }

    document.addEventListener("mousemove", setCoordMouse);

    document.addEventListener("mouseout", (event) => {
      if (!event.relatedTarget && !event.toElement) {
        cursorPoint.style.opacity = "0";
      }
    });

    document.addEventListener("mouseover", () => {
      cursorPoint.style.opacity = "1";
    });

    return () => {
      document.removeEventListener("mousemove", setCoordMouse);
      document.removeEventListener("mouseout");
      document.removeEventListener("mouseover");
    };
  }, []);

  useEffect(() => {
    if (!isTouch()) {
      gsap.to(".horizontal-scroll-container", {
        x: "-100vw",
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-scroll-container",
          end: () => "+=" + 1 * window.outerWidth,
          pin: true,
          scrub: 0,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="cursor-point"></div>
      <div className="wrapper">
        <Header />
        <Order />
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
