import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./Hero.module.css";
import Logo from "../common/logo";
import Tag from "../common/tag";
import Nav from "../common/nav";
import Search from "../common/search";

class Hero extends Component {
  state = {
    name: ["Home", "Features", "Blog", "Documentation"],
    value: "",
  };

  searchMethod = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  render() {
    return (
      <Card style={Classes.Card}>
        <Logo style={Classes.Logo} />
        <Nav
          name={this.state.name}
          nav_link_style={Classes.Nav_link}
          nav_style={Classes.Nav}
        />
        <Search
          style={Classes.Search}
          value={this.state.value}
          onChange={this.searchMethod}
        />
      </Card>
    );
  }
}

export default Hero;
