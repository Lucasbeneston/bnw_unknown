/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import allPictures from "../../../data/allPictures";

import "./Home.scss";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: null,
    name: null,
    location: null,
    date: null,
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
          <h2>{selectedImage.name}</h2>
          <h3>{selectedImage.location}</h3>
          <h3>{selectedImage.date}</h3>
        </div>
        <button
          className="home_pictureSelected_closeButton"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
        >
          Fermer
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
                index,
              });
              setIsOpen(!isOpen);
            }}
            key={picture}
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
