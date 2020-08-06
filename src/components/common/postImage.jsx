import React from "react";
import Classes from "./style.module.css";

const PostImage = (props) => {
  return (
    <img
      className={Classes.Img}
      src={require(`../../image/recipes/${props.imageLocation}.jpg`)}
    />
  );
};

export default PostImage;
