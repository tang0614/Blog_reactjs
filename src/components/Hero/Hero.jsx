import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./Hero.module.css";
import Logo from "../common/logo";
import Nav from "../common/nav";
import Search from "../common/search";

class Hero extends Component {
  state = {
    link: [
      { name: "Bread", path: "bread" },
      { name: "Cake", path: "cake" },
    ],
    value: "",
  };

  searchMethod = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <Card style={Classes.Card}>
        <Logo style={Classes.Logo} />
        <Nav
          link={this.state.link}
          nav_link_style={Classes.Nav_link}
          nav_style={Classes.Nav}
        />
        <Search
          style={Classes.Search}
          inputStyle={Classes.SearchInput}
          value={this.state.value}
          onChange={this.searchMethod}
          onSubmit={this.submitForm}
        />
      </Card>
    );
  }
}

export default Hero;
