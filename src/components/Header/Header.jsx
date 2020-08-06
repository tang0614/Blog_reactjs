import React, { Component } from "react";
import Classes from "./Header.module.css";
import Card from "../common/card";
import Nav from "../common/nav";
import Social from "../common/social";

class Header extends Component {
  state = {
    link: [
      { name: "HOME", path: "" },
      { name: "ABOUT", path: "about" },
      { name: "CONTACT US", path: "contact" },
    ],
  };
  render() {
    return (
      <Card style={Classes.Header}>
        <Nav link={this.state.link} nav_link_style={Classes.Nav_link} />
        <Social />
      </Card>
    );
  }
}

export default Header;
