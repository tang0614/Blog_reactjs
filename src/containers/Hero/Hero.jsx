import React, { Component } from "react";
import Card from "../../components/common/card";
import Classes from "./Hero.module.css";
import Logo from "../../components/common/logo";
import Nav from "../../components/common/nav";
import Search from "../../components/common/search";
import { withRouter, Route, Redirect } from "react-router-dom";

import cakeData from "../../data/cake.json";
import Ingredient from "../Ingredient/Ingredient";

class Hero extends Component {
  state = {
    posts: "",
    post: "",
    value: "",
    showDropdown: false,
    link: [
      { name: "Home", path: "/" },
      { name: "Posts", path: "/cake" },
      { name: "ByIngredient", path: `/byIngredient` },
    ],
    filteredLink: [],
  };

  componentWillMount() {
    const posts = cakeData.data;
    this.setState({ posts });
  }

  getPost = (category, id) => {
    const posts = this.state.posts;
    const postId = id;
    const cat = category;

    let post = null;
    const found = posts.find(
      (post) => post.id === postId && post.category === cat
    );
    if (found) {
      post = {
        category: found.category,
        title: found.title,
        by: found.by,
        imageLocation: found.imageLocation,
        content: found.content,
      };
    } else {
      post = this.state.post;
    }

    this.setState({ post });
  };

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
        path: `/cake/${post.id}`,
        imageLocation: post.imageLocation,
        type: "search",
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
    if (this.state.value === "") {
      return;
    }
    this.filterLink();
  };

  render() {
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
