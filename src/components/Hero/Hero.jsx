import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./Hero.module.css";
import Logo from "../common/logo";
import Nav from "../common/nav";
import Search from "../common/search";
import Dropdown from "../Dropdown/Dropdown";

const link = [
  { name: "Bread", path: "/bread" },
  { name: "Cake", path: "/cake" },
  { name: "ByIngredient", path: "/ingredient" },
];
class Hero extends Component {
  state = {
    value: "",
    show: false,
  };

  showDropdown = () => {
    this.setState((preState) => {
      return { show: !preState.show };
    });
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
          link={link}
          nav_link_style={Classes.Nav_link}
          nav_style={Classes.Nav}
          showDropdown={this.showDropdown}
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
