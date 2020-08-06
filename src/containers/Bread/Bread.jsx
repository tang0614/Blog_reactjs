import React from "react";
import Post from "../../components/Post/Post";
import RecentPost from "../../components/RecentPost/RecentPost";
import Classes from "./Bread.module.css";

const Bread = (props) => {
  return (
    <div className={Classes.Bread}>
      <Post {...props} />
      <RecentPost {...props} />
    </div>
  );
};

export default Bread;
