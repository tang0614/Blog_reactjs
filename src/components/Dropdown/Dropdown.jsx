import Classes from "./Dropdown.module.css";
import React, { Component } from "react";
import Nav from "../common/nav";

const link = [
  { name: "Chocolate", path: "/ingredient/chocolate" },
  { name: "Apple", path: "/ingredient/apple" },
  { name: "Caramel", path: "/ingredient/caramel" },
  { name: "Pineapple", path: "/ingredient/pineapple" },
];

class Dropdown extends Component {
  render() {
    const dropClasses = this.props.showDropdown
      ? "Dropdown"
      : "DropdownClicked";
    return (
      <div className={Classes[dropClasses]}>
        <Nav link={link} nav_link_style={Classes.Nav_link} isDrop={true} />
      </div>
    );
  }
}

export default Dropdown;
