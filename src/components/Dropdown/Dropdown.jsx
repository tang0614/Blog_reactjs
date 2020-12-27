import Classes from "./Dropdown.module.css";
import React, { Component } from "react";
import Nav from "../common/nav";

const link = [
  {
    name: "Food Ordering Site",
    path: "/side/5f600c4c9260c80017571a5d",
    type: "search",
  },
  {
    name: "Movie NoteBook",
    path: "/side/5f600efebe79fc001711e838",
    type: "search",
  },
  {
    name: "Reddit Search",
    path: "/side/5f601107be79fc001711e83a",
    type: "search",
  },
  {
    name: "Tetris Game",
    path: "/side/5f600fabbe79fc001711e839",
    type: "search",
  },
  {
    name: "Music Player",
    path: "/side/5f600c4c9260c80017571a5d",
    type: "search",
  },
  {
    name: "Calculator",
    path: "/side/5f600efebe79fc001711e838",
    type: "search",
  },
  {
    name: "Login Form",
    path: "/side/5f6011c6be79fc001711e83b",
    type: "search",
  },
];

class Dropdown extends Component {
  render() {
    const dropClasses = this.props.showDropdown
      ? "Dropdown"
      : "DropdownClicked";
    return (
      <div className={Classes[dropClasses]}>
        <Nav
          link={link}
          nav_link_style={Classes.Nav_link}
          nav_style={Classes.Nav}
          isDrop={true}
        />
      </div>
    );
  }
}

export default Dropdown;
