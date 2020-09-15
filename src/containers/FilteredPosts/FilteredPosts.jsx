import Classes from "./FilteredPosts.module.css";
import React, { Component } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Post from "../../components/Post/Post";

class FilteredPosts extends Component {
  render() {
    const postsLayout = this.props.filteredLink ? (
      this.props.filteredLink.map((post, id) => (
        <Post
          key={id}
          title={post.title}
          description={post.description}
          section={post.section}
          _id={post._id}
          {...this.props}
        />
      ))
    ) : (
      <p className={Classes.Notes}>Sorry, no related post's title.</p>
    );

    return (
      <div className={Classes.Posts}>
        <main className={Classes.Main}>{postsLayout}</main>
        <aside className={Classes.Side}>
          <SideBar />
        </aside>
      </div>
    );
  }
}

export default FilteredPosts;
