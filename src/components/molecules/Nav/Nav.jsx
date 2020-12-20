import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

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
      <Link className={`nav_logo ${isFixed ? "fixed" : ""}`} to="/">
        Bnw_unknown.
      </Link>
      <div className="nav_containerlinks">
        <Link className="nav_containerlinks_link" to="/">
          Cities
        </Link>
        <Link className="nav_containerlinks_link" to="/">
          Portraits
        </Link>
        <Link className="nav_containerlinks_link" to="/">
          About
        </Link>
      </div>
    </nav>
  );
}
