import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
import Instagram from "../../atoms/SVGR/Instagram";

export default function Nav() {
  const [isFixed, setIsFixed] = useState(false);

  const fixNav = () => {
    const heightOfNav = document.querySelector(".nav").offsetHeight;
    const heightOfBanner = document.querySelector(".banner").offsetHeight;

    if (window.scrollY >= heightOfBanner) {
      setIsFixed(true);
      document.body.style.paddingTop = `${heightOfNav}px`;
    } else {
      setIsFixed(false);
      document.body.style.paddingTop = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <nav className={`nav ${isFixed ? "fixed" : ""}`}>
      <a
        className="nav_instagram"
        href="https://www.instagram.com/bnw_unknown/"
      >
        <Instagram />
      </a>
      <Link className={`nav_logo ${isFixed ? "fixed" : ""}`} to="/">
        bnw_unknown.
      </Link>
      <div className="nav_containerlinks">
        <Link className="nav_containerlinks_link" to="/cities">
          cities.
        </Link>
        <Link className="nav_containerlinks_link" to="/portraits">
          portraits.
        </Link>
        <Link className="nav_containerlinks_link" to="/about">
          about.
        </Link>
      </div>
    </nav>
  );
}
