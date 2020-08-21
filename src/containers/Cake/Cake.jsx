import React, { Component } from "react";
import Post from "../../components/Post/Post";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./Cake.module.css";

import cakeData from "../../data/cake.json";
import Ingredient from "../Ingredient/Ingredient";

class Cake extends Component {
  state = {
    filtered: false,
    filteredLink: "",
    update: true,
    post: {
      category: "Cake",
      title: "Pineapple Upside Down Cake",
      by: "Posted on April 9, 2020",
      imageLocation: "pineapple-upside-down-cake",
      content:
        "I developed and published a pineapple upside down cake recipe several years ago. It’s certainly loved by many, but the cake is prone to overflowing because there’s quite a lot of batter. Additionally, it can taste overly wet and the instructions were never written very clearly. As a cookbook author and baker, I’ve certainly improved my craft over the years! Though I kept the original recipe written in the notes below, I want to share my new and improved version with you.My improved pineapple upside down cake recipe, written below, is much softer than my original. Using creamed butter instead of melted, cake flour instead of all-purpose flour, all white sugar instead of brown sugar + white, and using egg whites guarantees a huge textural difference. I adapted it from my white cake. Additionally, we’ll skip the pineapple juice in the cake batter because it often produces a wet crumb. (There’s plenty of pineapple flavor in the topping!) Finally, my new recipe doesn’t yield as much cake batter, so we don’t have to worry about overflowing.",
    },
  };

  componentDidMount() {
    console.log("componentDidMount");
    const posts = cakeData.data;
    this.setState({ posts });
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    const preurl = prevProps.location.pathname;
    const currenturl = this.props.location.pathname;
    console.log("preurl", preurl);
    console.log("currenturl", currenturl);
    if (preurl !== currenturl) {
      this.getPost();
    } else {
      if (
        this.props.location.state.prevPath === "search" &&
        preurl === currenturl
      ) {
        if (this.state.update) {
          this.getPost();
          this.setState({ update: false });
        }
      }
    }
  }

  getPosts(postId) {
    let filteredPosts = null;
    filteredPosts = this.state.posts.filter((post) => post.category === postId);
    if (filteredPosts) {
      const filteredLink = filteredPosts.map((post) => {
        return {
          name: post.title,
          path: `/cake/${post.id}`,
          imageLocation: post.imageLocation,
        };
      });
      this.setState({ filteredLink });
      this.setState({ filtered: true });
    }
  }

  getPost() {
    const posts = this.state.posts;
    const postId = this.props.match.params.postId;
    if (
      postId === "apple" ||
      postId === "chocolate" ||
      postId === "caramel" ||
      postId === "pineapple"
    ) {
      this.getPosts(postId);
    } else {
      let post = null;
      const found = posts.find((post) => post.id === postId);
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
      this.setState({ filtered: false });
      this.setState({ post });
    }
  }

  render() {
    console.log(this.state.filtered);
    return (
      <div>
        {this.state.filtered ? (
          <Ingredient link={this.state.filteredLink} />
        ) : (
          <div className={Classes.Cake}>
            <Post post={this.state.post} />
            <SideBar />
          </div>
        )}
      </div>
    );
  }
}

export default Cake;
