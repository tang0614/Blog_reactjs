import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/aux";

const Summary = ({ ingredients, totalPrice, notPurchasing, submitBill }) => {
  const ingredientSummary = Object.keys(ingredients).map((el) => {
    return (
      <li key={el}>
        {<span style={{ textTransform: "capitalize" }}>{el}</span>}:
        {ingredients[el]}
      </li>
    );
  });
  return (
    <Aux>
      <h2>{"Your Order"}</h2>
      <h3>{"Delicious ingredients inside this burger"}</h3>
      <ul>{ingredientSummary}</ul>
      <h3>{`Total Price : $ ${totalPrice}`}</h3>
      <p>{"Continue to checkout?"}</p>

      <Button onClick={submitBill} btnType={"Success"}>
        Continue
      </Button>
      <Button onClick={notPurchasing} btnType={"Danger"}>
        Cancel
      </Button>
    </Aux>
  );
};

export default Summary;
