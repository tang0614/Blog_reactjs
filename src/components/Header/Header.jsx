import React, { Component } from "react";
import Classes from "./Header.module.css";
import Card from "../common/card";
import Nav from "../common/nav";
import Social from "../common/social";

class Header extends Component {
  state = {
    name: ["HOME", "ABOUT", "CONTACT US"],
  };
  render() {
    return (
      <Card style={Classes.Header}>
        <Nav name={this.state.name} nav_link_style={Classes.Nav_link} />
        <Social />
      </Card>
    );
  }
}

export default Header;
