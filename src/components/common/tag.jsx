import React from "react";
import { NavLink } from "react-router-dom";

const Tag = (props) => {
  return (
    <NavLink to={`./${props.path}`} className={props.nav_link_style}>
      {props.name}
    </NavLink>
  );
};

export default Tag;
