import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav_link" to="/">
        Cities
      </Link>
      <Link className="nav_link" to="/">
        Portraits
      </Link>
      <Link className="nav_link" to="/">
        About
      </Link>
    </nav>
  );
}
