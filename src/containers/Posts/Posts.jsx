import Classes from "./Posts.module.css";
import { withRouter } from "react-router";
import React, { Component } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Post from "../../components/Post/Post";

class Posts extends Component {
  render() {
    const projectsCompo = this.props.posts
      ? this.props.posts.map((post, id) => (
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
        <main className={Classes.Main}>{projectsCompo}</main>
        <aside className={Classes.Side}>
          <SideBar />
        </aside>
      </div>
    );
  }
}

export default withRouter(Posts);
