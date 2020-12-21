import React from "react";
import { Link } from "react-router-dom";
import allPictures from "../../../data/allPictures";

import "./Banner.scss";

export default function Banner() {
  const randomNumber = Math.floor(Math.random() * (allPictures.length - 0) + 0);

  return (
    <div className="banner">
      <img
        className="banner_illustration"
        src={`${process.env.PUBLIC_URL}/images/${allPictures[randomNumber].src}`}
        alt="Illustration de la bannière"
      />
      <Link to="/">
        <h1 className="banner_title">bnw_unknown.</h1>
      </Link>
    </div>
  );
}
