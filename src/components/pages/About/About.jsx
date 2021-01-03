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
            Hi, my name is Lucas, I'm a front-end web developer and photographer
            in my spare time! What I like is to walk for hours in the cities to
            take pictures of life moments. Most of the people in my pictures are
            unknown people from the back and alone, because I like to bring a
            part of mystery. When I look at my pictures, I always wonder who
            this person is, what their face looks like, what they are doing,
            etc. I like to bring a bit of mystery to the picture. 
          </p>
          <br />
          <p className="about_informations_description_paragraph">
            I started photography in 2018 when my grandparents gave me a Canon
            T70 (1984). It was with this camera that I took a series of photos
            in New York, a city that I particularly appreciate for the energy it
            gives off. Today, most of my photos are taken with a Minolta XG2
            (1977), which a friend gave me. Soon, I would like to do a series of
            portraits of my friends, but also of strangers.
          </p>
          <br />
          <p className="about_informations_description_paragraph">
            What I like about film photography is that I don't know the result
            of my shots before I print them, and it makes me feel like I'm
            reliving every moment. If I chose black and white, it's because I
            like the contrast between light and shadow, but also because I think
            it adds a bit of mystery to my photos and stimulates the imagination
            a little more. 
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
