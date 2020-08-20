import React, { Component } from "react";
import Classes from "./home.module.css";
import InstCard from "../../components/common/InstCard";
import Card from "../../components/common/card";

class Home extends Component {
  render() {
    const cakes = {
      colOne: ["lavender-cake", "burnt-sugar-cake", "chocolate-croissants"],
      colTwo: ["garlic-knots", "pavlova", "pineapple-upside-down-cake"],
      colThree: ["bread-bowls", "apple-blueberry"],
    };
    return (
      <div className={Classes.Home}>
        <div className={Classes.Column}>
          {cakes.colOne.map((imageLocation, id) => {
            return (
              <Card key={id} style={Classes.Card}>
                <InstCard imageLocation={imageLocation} />
              </Card>
            );
          })}
        </div>
        <div className={Classes.ColumnLarge}>
          {cakes.colThree.map((imageLocation, id) => {
            return (
              <Card key={id} style={Classes.Card}>
                <InstCard imageLocation={imageLocation} />
              </Card>
            );
          })}
        </div>
        <div className={Classes.Column}>
          {cakes.colTwo.map((imageLocation, id) => {
            return (
              <Card key={id} style={Classes.Card}>
                <InstCard imageLocation={imageLocation} />
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
