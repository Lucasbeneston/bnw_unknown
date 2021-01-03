import React, { useState } from "react";
import citiesPictures from "../../../data/citiesPictures";
import Picture from "../../molecules/Picture/Picture";
import PictureSelected from "../../molecules/PictureSelected/PictureSelected";

import "./Cities.scss";

export default function Cities() {
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
    <div className="cities">
      <PictureSelected
        isOpenState={isOpen}
        selectedImageSrc={selectedImage.src}
        selectedImageState={selectedImage}
        selectedImageName={selectedImage.name}
        selectedImageDate={selectedImage.date}
        selectedImageLocation={selectedImage.location}
        selectedImagCamera={selectedImage.camera}
        onClickEvent={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className="cities_container">
        {citiesPictures.map((picture, index) => (
          <Picture
            key={picture.src}
            onClickEvent={() => {
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
            pictureName={picture.name}
            pictureSrc={picture.src}
          />
        ))}
      </div>
    </div>
  );
}
