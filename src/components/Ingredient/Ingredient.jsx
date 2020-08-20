import Card from "../common/card";
import Classes from "./Ingredient.module.css";
import InstCard from "../common/InstCard";

import React from "react";

const Ingredient = (props) => {
  const feed = props.link ? (
    <div className={Classes.Column}>
      {props.link.map((el, id) => {
        return (
          <Card style={Classes.Card} key={id + el.name}>
            <InstCard
              name={el.name}
              path={el.path}
              imageLocation={el.imageLocation}
            />
          </Card>
        );
      })}
    </div>
  ) : (
    <p style={{ display: "flex", justifyContent: "center" }}>
      Sorry...no related search, please try another one.
    </p>
  );
  return <div className={Classes.Ingredient}>{feed}</div>;
};

export default Ingredient;
