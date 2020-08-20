import Card from "../../components/common/card";

import Classes from "./Ingredient.module.css";
import InstCard from "../../components/common/InstCard";

import React, { Component } from "react";

class Ingredient extends Component {
  render() {
    const feed = this.props.link ? (
      <div className={Classes.Column}>
        {this.props.link.map((el, id) => {
          return (
            <Card style={Classes.Card}>
              <InstCard
                key={id}
                name={el.name}
                path={el.path}
                imageLocation={el.imageLocation}
              />
            </Card>
          );
        })}
      </div>
    ) : (
      <p></p>
    );
    return <div className={Classes.Ingredient}>{feed}</div>;
  }
}

export default Ingredient;
