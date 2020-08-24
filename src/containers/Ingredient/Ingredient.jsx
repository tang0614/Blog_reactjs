import Card from "../../components/common/card";
import Classes from "./Ingredient.module.css";
import InstCard from "../../components/common/InstCard";

import React from "react";

const Ingredient = (props) => {
  return (
    <div className={Classes.Ingredient}>
      {props.link ? (
        <div className={Classes.Column}>
          {props.link.map((el, id) => {
            return (
              <Card style={Classes.Card} key={id + el.name}>
                <InstCard
                  name={el.name}
                  path={el.path}
                  imageLocation={el.imageLocation}
                  type={el.type}
                />
              </Card>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Ingredient;
