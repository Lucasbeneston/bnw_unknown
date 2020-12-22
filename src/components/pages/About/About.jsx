import React, { useContext, useEffect } from "react";
import DarkroomContext from "../../../contexts/DarkroomContext";

import "./About.scss";

export default function About() {
  const context = useContext(DarkroomContext);
  const { darkroom } = context;

  useEffect(() => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const footerHeight = document.querySelector(".footer").offsetHeight;
    document.querySelector(".about").style.minHeight = `calc(100vh - (${
      headerHeight + footerHeight
    }px))`;
  }, []);

  return (
    <div className={`about ${darkroom ? "darkroom" : ""}`}>
      <div className="about_illustration">
        <img
          src={`${process.env.PUBLIC_URL}/images/bnw_unknown_eye.jpg`}
          alt="Illustration of bnw_unknown"
        />
        <div className="about_illustration_citation">
          <q> Photography is the literature of the eye </q>
          <h3>Remy Donnadieau</h3>
        </div>
      </div>

      <div className="about_informations">
        <div className="about_informations_description">
          <h2 className="about_informations_description_title">about.</h2>
          <p className="about_informations_description_paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            omnis ea tempore et adipisci obcaecati quaerat, aut numquam
            voluptate suscipit porro sint. Accusantium quibusdam enim asperiores
            corporis ut consequatur maxime.
          </p>
          <br />
          <p className="about_informations_description_paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            omnis ea tempore et adipisci obcaecati quaerat, aut numquam
            voluptate suscipit porro sint. Accusantium quibusdam enim asperiores
            corporis ut consequatur maxime.
          </p>
        </div>

        <div className="about_informations_camera">
          <div className="about_informations_camera_description">
            <img
              src={`${process.env.PUBLIC_URL}/images/minolta.png`}
              alt="Illustration of my camera"
            />
            <h3 className="about_informations_camera_description_name">
              Minolta XG2
            </h3>
            <h4 className="about_informations_camera_description_date">
              1977 - 1980
            </h4>
          </div>
          <div className="about_informations_camera_description">
            <img
              src={`${process.env.PUBLIC_URL}/images/canon.png`}
              alt="Illustration of my camera"
            />
            <h3 className="about_informations_camera_description_name">
              Canon T70
            </h3>
            <h4 className="about_informations_camera_description_date">
              1984 - 1989
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
