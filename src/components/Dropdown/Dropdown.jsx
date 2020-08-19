import React, { useState } from "react";
import Classes from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import Nav from "../common/nav";

const link = [
  { name: "Chocolate", path: "/ingredient/chocolate" },
  { name: "Apple", path: "/ingredient/apple" },
  { name: "Caramel", path: "/ingredient/caramel" },
  { name: "Pineapple", path: "/ingredient/pineapple" },
];

const Dropdown = (props) => {
  const dropClasses = props.showDropdown ? "Dropdown" : "DropdownClicked";

  return (
    <nav>
      <ul className={Classes[dropClasses]}>
        <Nav link={link} nav_link_style={Classes.Nav_link} />
      </ul>
    </nav>
  );
};

export default Dropdown;
