import React from "react";
import classes from "./Module.module.css";
const Module = (props) => {
  return (
    <div
      className={classes.Module}
      onClick={props.close}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Module;
