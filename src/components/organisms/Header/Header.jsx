import React from "react";
import Banner from "../../molecules/Banner/Banner";
import Nav from "../../molecules/Nav/Nav";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Banner />
      <Nav />
    </header>
  );
}
