import React from "react";
import Classes from "./Notfound.module.css";
import Card from "../../components/common/card";

const Notfound = (props) => {
  return (
    <Card className={Classes.Card}>
      <div>Page Not Found</div>
    </Card>
  );
};

export default Notfound;
