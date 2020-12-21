/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import allPictures from "../../../data/allPictures";

import "./Home.scss";
import Camera from "../../atoms/SVGR/Camera";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: null,
    name: null,
    location: null,
    date: null,
    camera: null,
    index: 0,
  });

  return (
    <div className="home">
      <div className={`home_pictureSelected ${isOpen ? "open" : ""}`}>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/images/${selectedImage.src}`}
            alt={`Illustration de ${selectedImage}`}
          />
        </figure>
        <div className="home_pictureSelected_informations">
          <h2 className="home_pictureSelected_informations_title">
            {selectedImage.name}, <span>{selectedImage.date}</span>
          </h2>
          <h3 className="home_pictureSelected_informations_location">
            {selectedImage.location}
          </h3>
          <h4 className="home_pictureSelected_informations_camera">
            <Camera />
            {selectedImage.camera}
          </h4>
        </div>
        <button
          className="home_pictureSelected_closeButton"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
        >
          Close
        </button>
      </div>
      <div className="home_container">
        {allPictures.map((picture, index) => (
          <figure
            onClick={() => {
              setSelectedImage({
                src: picture.src,
                name: picture.name,
                location: picture.location,
                date: picture.date,
                camera: picture.camera,
                index,
              });
              setIsOpen(!isOpen);
            }}
            onKeyDown={() => {
              setSelectedImage({
                src: picture.src,
                name: picture.name,
                location: picture.location,
                date: picture.date,
                camera: picture.camera,
                index,
              });
              setIsOpen(!isOpen);
            }}
            key={picture.name}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${picture.src}`}
              alt={`Illustration de ${picture.src}`}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
