import React from "react";
import Tag from "./tag";

const Nav = (props) => {
  return (
    <nav className={props.nav_style}>
      {props.name.map((name) => {
        return <Tag name={name} nav_link_style={props.nav_link_style} />;
      })}
    </nav>
  );
};

export default Nav;
