import React from "react";
import Classes from "./Navigationlist.module.css";
import { NavLink } from "react-router-dom";

const Navigationlist = (props) => {
  return (
    <li className={Classes.Navigationlist}>
      <NavLink exact activeClassName={Classes.active} to={props.address}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default Navigationlist;
