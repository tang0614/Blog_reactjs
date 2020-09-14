import Classes from "./Dropdown.module.css";
import React, { Component } from "react";
import Nav from "../common/nav";

const link = [
  { name: "Music Player", path: "/side/music", type: "search" },
  {
    name: "Calculator",
    path: "/side/calculator",
    type: "search",
  },
  { name: "Login Form", path: "/side/form", type: "search" },
  { name: "Reddit Search", path: "/side/search", type: "search" },
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
