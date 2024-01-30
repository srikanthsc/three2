/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GalleryItem = ({ className, imgClassName, img = "/img/img-50.png" }) => {
  return (
    <div className={`gallery-item ${className}`}>
      <div className="img">
        <img className={`img-2 ${imgClassName}`} alt="Img" src={img} />
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  img: PropTypes.string,
};
