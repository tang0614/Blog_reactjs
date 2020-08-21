import React from "react";
import classes from "./Sidedrawer.module.css";
import Logo from "../../Logo/Logo";
import Navigationlists from "../NavigationLists/Navigationlists";
import Aux from "../../../hoc/aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.show) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.show} close={props.onClick} />
      <div className={attachedClasses.join(" ")}>
        <Navigationlists direction="col" />
      </div>
    </Aux>
  );
};

export default Sidedrawer;
