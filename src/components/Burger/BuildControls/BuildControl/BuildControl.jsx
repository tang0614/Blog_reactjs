import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = ({ label, addIngredient, removeIngredient, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={removeIngredient} disabled={disabled}>
        {"Less"}
      </button>
      <button onClick={addIngredient}>{"More"}</button>
    </div>
  );
};

export default BuildControl;
