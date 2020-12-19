import React from "react";

import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <img
        className="banner_illustration"
        src={`${process.env.PUBLIC_URL}/images/test.png`}
        alt="Illustration de la bannière"
      />
      <h1 className="banner_title">bnw_unknown</h1>
    </div>
  );
}
