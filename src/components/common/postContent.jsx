import React from "react";
import Classes from "./style.module.css";

const PostContent = (props) => {
  return <div className={Classes.Post_content}>{props.content}</div>;
};

export default PostContent;
