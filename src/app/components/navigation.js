"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./navigation.css";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if a section was stored and scroll to it after page reload
    const sectionToScroll = sessionStorage.getItem("scrollToSection");
    if (sectionToScroll) {
      setTimeout(() => {
        document
          .getElementById(sectionToScroll)
          ?.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollToSection"); // Clear storage after scrolling
      }, 500);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false); // Closes the menu when a link is clicked

  // Reload Home & Scroll to Hero Section
  const reloadHomeAndScroll = () => {
    closeMenu();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        window.location.reload();
        setTimeout(() => {
          document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        window.location.href = "/#hero";
      }
    }
  };

  // Navigate to a Section (store section before reload)
const navigateToSection = (sectionId) => {
  closeMenu();
  if (typeof window !== "undefined") {
    if (window.location.pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      window.location.href = "/";
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  }
};

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <button onClick={reloadHomeAndScroll}>
            <img src="/logo.png" alt="Logo" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {/* Close Button (Only Visible When Menu is Open) */}
          {isMenuOpen && (
            <button className="close-btn" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          )}
          <button onClick={reloadHomeAndScroll}>Home</button>
          <button onClick={() => {navigateToSection("about-us"); closeMenu;}}>
            About Us
          </button>
          <button onClick={() => {navigateToSection("our-services"); closeMenu;}}>
            Our Services
          </button>
          <button onClick={() => {navigateToSection("testimonials"); closeMenu}}>
            Testimonials
          </button>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <button onClick={() => { navigateToSection("youtube-wall"); closeMenu;}}>
            YouTube Wall
          </button>
          <button onClick={() => {navigateToSection("contact-us"); closeMenu;}}>
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
