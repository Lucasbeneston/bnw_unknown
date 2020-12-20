import React from "react";
import allPictures from "../../../data/allPictures";

import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <img
        className="banner_illustration"
        src={`${process.env.PUBLIC_URL}/images/${allPictures[0].src}`}
        alt="Illustration de la bannière"
      />
      <h1 className="banner_title">bnw_unknown.</h1>
    </div>
  );
}
