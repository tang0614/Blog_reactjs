import Classes from "./Dropdown.module.css";
import React, { Component } from "react";
import Nav from "../common/nav";

const link = [
  { name: "Chocolate", path: "/cake/chocolate", type: "search" },
  { name: "Apple", path: "/cake/apple", type: "search" },
  { name: "Caramel", path: "/cake/caramel", type: "search" },
  { name: "Pineapple", path: "/cake/pineapple", type: "search" },
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
