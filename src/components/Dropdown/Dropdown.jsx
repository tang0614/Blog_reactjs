import React, { useState } from "react";
import Classes from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import Nav from "../common/nav";

const link = [
  { name: "Chocolate", path: "/ingredient/chocolate" },
  { name: "Strawberry", path: "/ingredient/strawberry" },
  { name: "Vanilla", path: "/ingredient/vanilla" },
];

const Dropdown = (props) => {
  const dropClasses = props.showDropdown ? "Dropdown" : "DropdownClicked";

  return (
    <nav>
      <ul className={Classes[dropClasses]} onClick={props.changeDropdown}>
        <Nav link={link} nav_link_style={Classes.Nav_link} />
      </ul>
    </nav>
  );
};

export default Dropdown;
