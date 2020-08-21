import React from "react";
import Classes from "./Home.module.css";
import InstCard from "../../components/common/InstCard";
import Card from "../../components/common/card";
import SideBar from "../../components/SideBar/SideBar";

const cakes = {
  colOne: ["lavender-cake", "burnt-sugar-cake", "chocolate-croissants"],
  colTwo: ["garlic-knots", "pavlova", "pineapple-upside-down-cake"],
  colThree: ["bread-bowls", "apple-blueberry"],
};

const Home = () => {
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
      <SideBar />
    </div>
  );
};

export default Home;
