import React, { Component } from "react";
import Post from "../../components/Post/Post";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./Cake.module.css";

import cakeData from "../../data/cake.json";

class Cake extends Component {
  state = {
    update: true,
    post: {
      category: "Cake",
      title: "Pineapple Upside Down Cake",
      by: "Posted on April 9, 2020",
      imageLocation: "pineapple-upside-down-cake",
      content:
        "I developed and published a pineapple upside down cake recipe several years ago. It’s certainly loved by many, but the cake is prone to overflowing because there’s quite a lot of batter. Additionally, it can taste overly wet and the instructions were never written very clearly. As a cookbook author and baker, I’ve certainly improved my craft over the years! Though I kept the original recipe written in the notes below, I want to share my new and improved version with you.My improved pineapple upside down cake recipe, written below, is much softer than my original. Using creamed butter instead of melted, cake flour instead of all-purpose flour, all white sugar instead of brown sugar + white, and using egg whites guarantees a huge textural difference. I adapted it from my white cake. Additionally, we’ll skip the pineapple juice in the cake batter because it often produces a wet crumb. (There’s plenty of pineapple flavor in the topping!) Finally, my new recipe doesn’t yield as much cake batter, so we don’t have to worry about overflowing.",
    },
    about_card: {
      name: "About",
      path: "/about",
      imageLocation: "me",
      content: "I am a shiba inu and my hobby is baking! Join with me!",
    },
    contact_card: {
      contact_name: "Contact",
      contact_path: "/contact",
      contact_imageLocation: "contact",
      contact_content: "Email: xinyu.tang0614@gmail.com",
    },
    cake_card: {
      cake_name: "Bread",
      cake_path: "/bread",
      cake_imageLocation: "garlic-knots",
      cake_content: "Find more bread recipe here!",
    },

    link: [{ name: "", path: "" }],
  };

  componentDidMount() {
    console.log("componentDidMount");
    const posts = cakeData.data;
    this.setState({ posts });
    const link = posts.map((post) => {
      return {
        name: post.title,
        path: `/cake/${post.id}`,
      };
    });
    this.setState({ link });
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

  getPost() {
    const posts = this.state.posts;
    const postId = this.props.match.params.postId;

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

    this.setState({ post });
  }

  render() {
    console.log("update", this.state.update);
    return (
      <div className={Classes.Cake}>
        <Post post={this.state.post} />
        <SideBar
          about_card={this.state.about_card}
          contact_card={this.state.contact_card}
          cake_card={this.state.cake_card}
          link={this.state.link}
        />
      </div>
    );
  }
}

export default Cake;
