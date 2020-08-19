import React, { Component } from "react";
import breadData from "../../data/bread.json";
import cakeData from "../../data/cake.json";
import { withRouter } from "react-router-dom";
import Post from "../../components/Post/Post";

class Ingredient extends Component {
  state = {
    keyWords: this.props.ingredient,
    called: true,
    posts: [
      {
        category: "Cake",
        title: "Pineapple Upside Down Cake",
        by: "Posted on April 9, 2020",
        imageLocation: "pineapple-upside-down-cake",
        content:
          "I developed and published a pineapple upside down cake recipe several years ago. It’s certainly loved by many, but the cake is prone to overflowing because there’s quite a lot of batter. Additionally, it can taste overly wet and the instructions were never written very clearly. As a cookbook author and baker, I’ve certainly improved my craft over the years! Though I kept the original recipe written in the notes below, I want to share my new and improved version with you.My improved pineapple upside down cake recipe, written below, is much softer than my original. Using creamed butter instead of melted, cake flour instead of all-purpose flour, all white sugar instead of brown sugar + white, and using egg whites guarantees a huge textural difference. I adapted it from my white cake. Additionally, we’ll skip the pineapple juice in the cake batter because it often produces a wet crumb. (There’s plenty of pineapple flavor in the topping!) Finally, my new recipe doesn’t yield as much cake batter, so we don’t have to worry about overflowing.",
      },
    ],
  };

  componentWillMount() {
    const breadPosts = breadData.data;
    const cakePosts = cakeData.data;
    const posts = breadPosts.concat(cakePosts);
    this.setState({ posts });
  }

  filterPosts = () => {
    const ingredient = this.state.keyWords;
    console.log("ingredient", ingredient);
    const posts = [...this.state.posts];
    console.log("posts", posts);
    const titles = posts.map((post) => post.title);
    console.log("title", titles);

    const p = Array.from(ingredient).reduce(
      (a, v, i) => `${a}[^${ingredient.toLowerCase().substr(i)}]*?${v}`,
      ""
    );

    const re = RegExp(p);
    const filteredTitle = titles.filter((item) => item.toLowerCase().match(re));
    console.log("filteredTitle", filteredTitle);
    const filteredPosts = filteredTitle.map((title) => {
      return posts.filter((item) => item.title === title);
    });

    console.log(" filteredPosts", filteredPosts);
    const link = filteredPosts.map((post) => {
      return {
        name: post.title,
        path: `/ingredient/${post.category}${post.id}`,
      };
    });
    this.setState({ called: false });
    return link;
  };

  render() {
    return <div>{this.props.ingredient}</div>;
  }
}

export default withRouter(Ingredient);
