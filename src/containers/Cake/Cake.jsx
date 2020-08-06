import React from "react";
import Card from "../../components/common/card";
import Classes from "./Cake.module.css";

const Cake = () => {
  return (
    <div className={Classes.Cake}>
      <Card style={Classes.Card}>Card</Card>
    </div>
  );
};

export default Cake;
