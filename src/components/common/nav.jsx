import React from "react";
import Tag from "./tag";

const Nav = (props) => {
  return (
    <nav className={props.nav_style}>
      {props.link.map((el, id) => {
        return (
          <Tag
            key={id}
            name={el.name}
            path={el.path}
            type={el.type}
            {...props}
          />
        );
      })}
    </nav>
  );
};

export default Nav;
