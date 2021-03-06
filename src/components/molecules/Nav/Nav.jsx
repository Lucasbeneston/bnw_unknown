/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState, useEffect } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import DarkroomContext from "../../../contexts/DarkroomContext";
import Instagram from "../../atoms/SVGR/Instagram";
import FilmRoll from "../../atoms/SVGR/FilmRoll";

import "./Nav.scss";

export default function Nav() {
  const context = useContext(DarkroomContext);
  const location = useLocation();

  const { darkroom, setDarkroom } = context;

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

  useEffect(() => {
    if (darkroom) {
      document.body.style.backgroundColor = "black";
      document.querySelectorAll("img").forEach((el) => {
        el.style.filter = "invert(100%)";
      });
    } else {
      document.body.style.backgroundColor = "#f1f1f1";
      document
        .querySelectorAll("img")
        .forEach((el) => (el.style.filter = "none"));
    }
  }, [darkroom, location]);

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
        <NavLink
          className="nav_containerlinks_link"
          activeClassName="selected"
          to="/cities"
        >
          cities.
        </NavLink>
        <NavLink
          className="nav_containerlinks_link"
          activeClassName="selected"
          to="/portraits"
        >
          portraits.
        </NavLink>
        <NavLink
          className="nav_containerlinks_link"
          activeClassName="selected"
          to="/about"
        >
          about.
        </NavLink>
      </div>
      <button
        type="button"
        className="nav_negative"
        onClick={() => {
          setDarkroom(!darkroom);
        }}
        onKeyDown={() => {
          setDarkroom(!darkroom);
        }}
      >
        <h2>darkroom_experience.</h2>
        <FilmRoll />
      </button>
    </nav>
  );
}
