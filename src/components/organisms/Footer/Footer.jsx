import React from "react";

import "./Footer.scss";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <h5 className="footer_copyright">&copy; {date} - bnw_unknown</h5>
    </footer>
  );
}
