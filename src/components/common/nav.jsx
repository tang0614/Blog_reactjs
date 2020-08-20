import React from "react";
import Tag from "./tag";

const Nav = (props) => {
  return (
    <nav className={props.nav_style}>
      {props.link.map((link, id) => {
        return (
          <Tag
            key={id}
            name={link.name}
            path={link.path}
            nav_link_style={props.nav_link_style}
            showDropdown={props.showDropdown}
            changeDropdown={props.changeDropdown}
            removeDropdown={props.removeDropdown}
            isdrop={props.isDrop}
          />
        );
      })}
    </nav>
  );
};

export default Nav;
