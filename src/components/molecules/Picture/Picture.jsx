/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

export default function Picture({ onClickEvent, pictureName, pictureSrc }) {
  return (
    <figure onClick={onClickEvent} onKeyDown={onClickEvent} key={pictureName}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${pictureSrc}`}
        alt={`Illustration de ${pictureSrc}`}
      />
    </figure>
  );
}

Picture.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  pictureName: PropTypes.string.isRequired,
  pictureSrc: PropTypes.string.isRequired,
};
