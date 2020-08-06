import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./Post.module.css";
import PostContent from "../common/postContent";
import PostHeader from "../common/postHeader";

import postData from "../../data/posts.json";
import PostImage from "../common/postImage";

class Post extends Component {
  state = {
    post: {
      category: "",
      title: "",
      by: "",
      imageLocation: "garlic-knots",
      content: "",
    },
  };

  componentDidMount() {
    const posts = postData.data;
    const firstPost = posts.find((post) => post.id === "1");

    const found = posts.find(
      (post) => post.id === this.props.match.params.postId
    );

    let post = null;
    if (found) {
      post = {
        category: found.category,
        title: found.title,
        by: found.by,
        imageLocation: found.imageLocation,
        content: found.content,
      };
    } else {
      post = firstPost;
    }
    this.setState({ post });
  }

  render() {
    const { category, title, imageLocation, by, content } = this.state.post;
    return (
      <Card style={Classes.Card}>
        <PostHeader category={category} title={title} by={by} />
        <PostImage imageLocation={imageLocation} />
        <PostContent content={content} />
      </Card>
    );
  }
}

export default Post;
