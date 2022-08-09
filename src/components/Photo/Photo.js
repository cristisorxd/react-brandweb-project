import React from "react";
import classes from "./Photo.module.scss";

const Photo = (props) => {
  return (
    <img
      className={classes.photo}
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Photo;
