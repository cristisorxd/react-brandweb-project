import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import classes from "./ButtonGroup.module.scss";

const ButtonGroup = (props) => {
  return (
    <div style={{ display: props.display }}>
      <button className={classes.first}>{props.firstBtnText}</button>
      <button className={classes.second}>
        {props.secondBtnText}
        <span>
          <KeyboardArrowRightIcon />
        </span>
      </button>
    </div>
  );
};

export default ButtonGroup;
