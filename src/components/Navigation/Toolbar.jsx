import React from "react";
import Navigationlists from "./NavigationLists/Navigationlists";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo sideDrawerHandler={props.sideDrawerHandler} />
      </div>
      <nav className={classes.Desktop}>
        <Navigationlists isAuthenticated={props.isAuthenticated} />
      </nav>
    </div>
  );
};

export default Toolbar;
