import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Camera from "../../atoms/SVGR/Camera";

import "./PictureSelected.scss";

export default function PictureSelected({
  isOpenState,
  selectedImageSrc,
  selectedImageState,
  selectedImageName,
  selectedImageDate,
  selectedImageLocation,
  selectedImagCamera,
  onClickEvent,
}) {
  useEffect(() => {
    const mouseCursor = document.querySelector(".pictureSelected_cursor");
    const buttonClose = document.querySelector(".pictureSelected_closeButton");
    const pictureSelected = document.querySelector(".pictureSelected figure");

    function cursor(e) {
      mouseCursor.style.top = `${e.clientY}px`;
      mouseCursor.style.left = `${e.clientX}px`;
    }

    window.addEventListener("mousemove", cursor);

    // If more button, quareySelectoAll + foreach
    buttonClose.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("button-grow");
    });

    buttonClose.addEventListener("mouseover", () => {
      mouseCursor.classList.add("button-grow");
    });

    pictureSelected.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("picture-grow");
    });

    pictureSelected.addEventListener("mouseover", () => {
      mouseCursor.classList.add("picture-grow");
    });
  }, [isOpenState]);

  return (
    <div className={`pictureSelected ${isOpenState ? "open" : ""}`}>
      <div className="pictureSelected_cursor" />
      <figure>
        <img
          src={`${process.env.PUBLIC_URL}/images/${selectedImageSrc}`}
          alt={`Illustration de ${selectedImageState}`}
        />
      </figure>
      <div className="pictureSelected_informations">
        <h2 className="pictureSelected_informations_title">
          {selectedImageName}, <span>{selectedImageDate}</span>
        </h2>
        <h3 className="pictureSelected_informations_location">
          {selectedImageLocation}
        </h3>
        <h4 className="pictureSelected_informations_camera">
          <Camera />
          {selectedImagCamera}
        </h4>
      </div>
      <button
        className="pictureSelected_closeButton"
        onClick={onClickEvent}
        type="button"
      >
        Close
      </button>
    </div>
  );
}

PictureSelected.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  isOpenState: PropTypes.bool.isRequired,
  selectedImageSrc: PropTypes.string.isRequired,
  selectedImageState: PropTypes.objectOf.isRequired,
  selectedImageName: PropTypes.string.isRequired,
  selectedImageDate: PropTypes.string.isRequired,
  selectedImageLocation: PropTypes.string.isRequired,
  selectedImagCamera: PropTypes.string.isRequired,
};
