import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./Hero.module.css";
import Logo from "../common/logo";
import Nav from "../common/nav";
import Search from "../common/search";
import { withRouter } from "react-router-dom";
import Ingredient from "../../containers/Ingredient/Ingredient";

class Hero extends Component {
  state = {
    ingredient: "",
    value: "",
    showDropdown: false,
    submitted: false,
    link: [
      { name: "Bread", path: "/bread" },
      { name: "Cake", path: "/cake" },
      { name: "ByIngredient", path: `/ingredient` },
    ],
  };
  selectIngredient = (ingredient) => {
    this.setState({ ingredient });
  };

  changeDropdown = () => {
    this.setState((preState) => {
      return { showDropdown: !preState.showDropdown };
    });
  };

  searchMethod = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
    this.setState({ submitted: true });
    this.props.history.push("/ingredient");
    console.log("pushed");
  };

  render() {
    return (
      <Card style={Classes.Card}>
        <Logo style={Classes.Logo} />
        <Nav
          link={this.state.link}
          nav_link_style={Classes.Nav_link}
          nav_style={Classes.Nav}
          showDropdown={this.state.showDropdown}
          changeDropdown={this.changeDropdown}
        />
        <Search
          style={Classes.Search}
          inputStyle={Classes.SearchInput}
          value={this.state.value}
          onChange={this.searchMethod}
          onSubmit={this.submitForm}
        />
        {this.state.submitted && this.state.value && (
          <Ingredient ingredient={this.state.value} />
        )}
      </Card>
    );
  }
}

export default withRouter(Hero);
