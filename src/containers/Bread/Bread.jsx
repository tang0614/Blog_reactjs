import React, { Component } from "react";
import Post from "../../components/Post/Post";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./Bread.module.css";
import postData from "../../data/bread.json";

class Bread extends Component {
  state = {
    posts: "",
    post: {
      category: "Bread",
      title: "Homemade Garlic Knots",
      by: "Posted on February 25, 2020 ",
      imageLocation: "garlic-knots",
      content:
        "These homemade garlic knots are extra soft and fluffy, made from my favorite 6 ingredient pizza dough, and are topped with flavorful garlic herb butter before AND after baking. Shaping is a breeze with my video tutorial and step-by-step pictures for visual help. This recipe is brought to you in partnership with Red Star Yeast.I’ve made these garlic knots 3x in the past month. Each batch yields 16 and there’s only 2 adults in this house. You do the math. (Ok ok, one night we had friends over for dinner but still.) These are the BEST garlic knots!!! I’m knot even kidding. 😉",
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
      cake_name: "Cake",
      cake_path: "/cake",
      cake_imageLocation: "lavender-cake",
      cake_content: "Find more cake recipe here!",
    },

    link: [{ name: "", path: "" }],
  };

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

  componentDidMount() {
    console.log("componentDidMount");
    const posts = postData.data;
    this.setState({ posts });
    const link = posts.map((post) => {
      return { name: post.title, path: `/bread/${post.id}` };
    });
    this.setState({ link });
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    const preurl = prevProps.location.pathname;
    const currenturl = this.props.location.pathname;

    if (preurl !== currenturl) {
      this.getPost();
      // window.location.replace(currenturl);
    }
  }

  render() {
    return (
      <div className={Classes.Bread}>
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

export default Bread;
