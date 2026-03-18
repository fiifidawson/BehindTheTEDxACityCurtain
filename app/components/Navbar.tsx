"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        TEDx<span>AcademicCity</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#videos">Talks</a></li>
        <li><a href="#press">Press</a></li>
      </ul>
    </nav>
  );
}
