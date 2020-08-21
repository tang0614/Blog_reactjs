import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  addIngredient,
  removeIngredient,
  disabled,
  purchasing,
  purchasable,
  isAuthenticated,
}) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            addIngredient={() => addIngredient(control.type)}
            removeIngredient={() => removeIngredient(control.type)}
            disabled={disabled[control.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={purchasable}
        onClick={purchasing}
      >
        {isAuthenticated ? "ORDER NOW" : "SIGNUP/IN TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
