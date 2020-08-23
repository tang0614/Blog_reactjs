import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { withRouter } from "react-router-dom";
const Burger = ({ ingredient }) => {
  let ingredientCompo = Object.keys(ingredient).map((name) =>
    [...Array(ingredient[name])].map((_, id) => {
      return <BurgerIngredient key={id + name} type={name} />;
    })
  );

  let finalIngredientCompo = ingredientCompo.reduce((arr, ele) => {
    return arr.concat(ele);
  }, []);

  if (finalIngredientCompo.length === 0) {
    finalIngredientCompo = <p>Please adding ingredient</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"} />
      {finalIngredientCompo}
      <BurgerIngredient type={"bread-bottom"} />
      {/* props-add method-remove method- */}
    </div>
  );
};

export default withRouter(Burger);
