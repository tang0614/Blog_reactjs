import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./Hero.module.css";
import Logo from "../common/logo";
import Nav from "../common/nav";
import Search from "../common/search";
import { withRouter, Route, Redirect } from "react-router-dom";
import Ingredient from "../../containers/Ingredient/Ingredient";
import breadData from "../../data/bread.json";
import cakeData from "../../data/cake.json";

class Hero extends Component {
  state = {
    posts: "",
    value: "",
    showDropdown: false,
    link: [
      { name: "Bread", path: "/bread" },
      { name: "Cake", path: "/cake" },
      { name: "ByIngredient", path: `/ingredient` },
    ],
    filteredLink: [],
  };

  componentWillMount() {
    const breadPosts = breadData.data;
    const cakePosts = cakeData.data;
    const posts = breadPosts.concat(cakePosts);
    this.setState({ posts });
  }

  filterLink = () => {
    const ingredient = this.state.value;
    const posts = [...this.state.posts];
    const titles = posts.map((post) => post.title);
    const p = Array.from(ingredient).reduce(
      (a, v, i) => `${a}[^${ingredient.toLowerCase().substr(i)}]*?${v}`,
      ""
    );
    const re = RegExp(p);
    const filteredTitle = titles.filter((item) => item.toLowerCase().match(re));
    let filteredPosts = filteredTitle.map((title) => {
      return posts.filter((item) => item.title === title);
    });
    filteredPosts = [].concat.apply([], filteredPosts);

    const filteredLink = filteredPosts.map((post) => {
      return {
        name: post.title,
        path: `/${post.category}/${post.id}`,
        imageLocation: post.imageLocation,
      };
    });

    this.setState({ filteredLink });
    this.setState({ value: "" });
    this.props.history.push("/ingredient");
  };

  selectIngredient = (ingredient) => {
    this.setState({ ingredient });
  };

  changeDropdown = () => {
    this.setState((preState) => {
      return { showDropdown: !preState.showDropdown };
    });
  };
  removeDropdown = () => {
    this.setState((preState) => {
      return { showDropdown: false };
    });
  };

  searchMethod = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (this.state.value == "") {
      return;
    }
    this.filterLink();
  };

  render() {
    console.log(this.state.showDropdown);

    return (
      <div style={Classes.Hero}>
        <Card style={Classes.Card}>
          <Logo style={Classes.Logo} />
          <Nav
            link={this.state.link}
            nav_link_style={Classes.Nav_link}
            nav_style={Classes.Nav}
            showDropdown={this.state.showDropdown}
            changeDropdown={this.changeDropdown}
            removeDropdown={this.removeDropdown}
          />
          <Search
            style={Classes.Search}
            inputStyle={Classes.SearchInput}
            value={this.state.value}
            onChange={this.searchMethod}
            onSubmit={this.submitForm}
          />
        </Card>

        <div>
          <Route
            exact
            path="/ingredient"
            render={() => <Ingredient link={this.state.filteredLink} />}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Hero);
