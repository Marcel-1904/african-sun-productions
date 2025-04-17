"use client";

import AboutUs from "./components/sections/AboutUs";
import ContactUs from "./components/sections/ContactUs";
import Hero from "./components/sections/Hero";
import OurServices from "./components/sections/OurServices";
import Testimonials from "./components/sections/Testimonials";
import YouTube from "./components/sections/YouTube";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css"; // Keep global styles

export default function Home() {
  const pathname = usePathname(); // ✅ Get current route

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const resetSections = () => {
      sections.forEach((section) => {
        section.style.transition = "none"; // Remove transition for instant reset
        section.style.filter = "blur(0px)"; // Clear blur
        section.style.opacity = "1"; // Fully visible
      });

      setTimeout(() => {
        sections.forEach((section) => {
          section.style.transition = "filter 0.8s ease, opacity 0.8s ease";
        });

        window.scrollTo(0, 0); // ✅ Force scroll to top to refresh effect
        setTimeout(() => handleScroll(), 100); // ✅ Reapply scroll effect after reset
      }, 100);
    };

    const handleScroll = () => {
      let viewportMiddle = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        let sectionMiddle = sectionTop + sectionHeight / 2;

        let distance = Math.abs(viewportMiddle - sectionMiddle);
        let blurValue = Math.min(10, distance / 200);
        let opacityValue = Math.max(0.2, 1 - distance / 300);

        if (distance < 200) {
          blurValue = 0;
          opacityValue = 1;
        }

        section.style.filter = `blur(${blurValue}px)`;
        section.style.opacity = opacityValue;
      });
    };

    if (pathname === "/") {
      resetSections(); // ✅ Reset styles instantly
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // ✅ Run once to apply effect immediately
      }, 200);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // ✅ Runs every time the route changes

  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <Testimonials />
      <YouTube />
      <ContactUs />
    </main>
  );
}
