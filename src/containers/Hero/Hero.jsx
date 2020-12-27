import React, { Component } from "react";
import Card from "../../components/common/card";
import Classes from "./Hero.module.css";
import Logo from "../../components/common/logo";
import Nav from "../../components/common/nav";
import Search from "../../components/common/search";
import { withRouter, Route, Redirect } from "react-router-dom";
import AsyncCompo from "../../hoc/asyncCompo";
import http from "../../httpService";
import { Link as Scroll } from "react-scroll";

const AsyncPosts = AsyncCompo(() => {
  return import("../FilteredPosts/FilteredPosts");
});

class Hero extends Component {
  
  state = {
    posts: "",

    value: "",
    showDropdown: false,
    link: [
      { name: "Portfolio", path: "/" },
      { name: "Posts", path: "/posts" },
      { name: "Small Projects", path: `/side` },
    ],
    filteredLink: "",
    showButton: false,
    
  };



  

  componentWillMount() {
    console.log("component did mount");
    http
      .get("/api/posts")
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => {
        return { message: err };
      });
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
        title: post.title,
        _id: post._id,
        description: post.description,
        section: post.section,
        path: `/posts/${post._id}`,
        type: "search",
      };
    });

    this.setState({ filteredLink });
    this.setState({ value: "" });

    this.props.history.push("/filtered");
  };

  selectIngredient = (ingredient) => {
    this.setState({ ingredient });
  };
  changeButton = () => {
    this.setState((preState) => {
      return { showButton: !preState.showButton };
    });
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
    const value = e.target.value.toLowerCase();
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
      <div>
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

          <button className={Classes.Button} onClick={this.changeButton}>
            <i className="fa fa-align-justify"></i>
            {this.state.showButton ? (
              <div>
                <Nav
                  link={this.state.link}
                  nav_link_style={Classes.Nav_link_2}
                  nav_style={Classes.Nav_2}
                  showDropdown={this.state.showDropdown}
                  changeDropdown={this.changeDropdown}
                  removeDropdown={this.removeDropdown}
                />
              </div>
            ) : (
              ""
            )}
          </button>
          <Scroll to="place-to-visit" smooth={true}>
            <span className={Classes.Icon}>
              <i className={"angle double down icon"}></i>
            </span>
          </Scroll>
        </Card>

        <div>
          <Route
            exact
            path="/filtered"
            render={() => <AsyncPosts filteredLink={this.state.filteredLink} />}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Hero);
