import React from "react";
import Classes from "./Order.module.css";

const Order = (props) => {
  let ingredient = [];
  for (let key in props.ingredient) {
    ingredient.push({ name: key, amount: props.ingredient[key] });
  }

  const ingredientOutput = ingredient.map((i, id) => {
    return (
      <span
        key={i.name + id}
        style={{ display: "inline-block", padding: "5px" }}
      >
        {i.name} : {i.amount}
      </span>
    );
  });
  return (
    <div className={Classes.Order}>
      <p>Price: $ {props.price}</p>
      <p>Ingredient: {ingredientOutput}</p>
    </div>
  );
};

export default Order;
