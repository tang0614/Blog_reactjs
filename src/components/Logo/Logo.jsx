import React from "react";
import logoImage from "../../image/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <input
        type="image"
        src={logoImage}
        name="logoImage"
        onClick={props.sideDrawerHandler}
      />
    </div>
  );
};

export default Logo;
