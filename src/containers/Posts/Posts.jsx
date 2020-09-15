import Classes from "./Posts.module.css";
import { withRouter } from "react-router";
import React, { Component } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Post from "../../components/Post/Post";
import http from "../../httpService";

class Posts extends Component {
  state = {
    posts: "",
  };
  componentDidMount() {
    console.log("Posts component did mount");
    http
      .get("/api/posts")
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => {
        return { message: err };
      });
  }

  render() {
    const postLayout = this.state.posts
      ? this.state.posts.map((post, id) => (
          <Post
            key={id}
            title={post.title}
            description={post.description}
            section={post.section}
            _id={post._id}
            {...this.props}
          />
        ))
      : "";

    return (
      <div className={Classes.Posts}>
        <main className={Classes.Main}>{postLayout}</main>
        <aside className={Classes.Side}>
          <SideBar />
        </aside>
      </div>
    );
  }
}

export default withRouter(Posts);
