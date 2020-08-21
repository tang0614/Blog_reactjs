import React from "react";
import Classes from "./style.module.css";

const PostHeader = (props) => {
  return (
    <div>
      <div className={Classes.Post_category}>{props.category}</div>
      <h1 className={Classes.Post_title}>{props.title}</h1>
      <div className={Classes.Post_by}>{props.by}</div>
    </div>
  );
};

export default PostHeader;
