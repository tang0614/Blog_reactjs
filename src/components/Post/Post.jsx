import React from "react";
import Card from "../common/card";
import Classes from "./Post.module.css";
import PostContent from "../common/postContent";
import PostHeader from "../common/postHeader";

const Post = (props) => {
  const { category, title, imageLocation, by, content } = props.post;

  return (
    <Card style={Classes.Card}>
      <PostHeader category={category} title={title} by={by} />

      <img
        className={Classes.Img}
        src={require(`../../image/${imageLocation}.jpg`)}
      />
      <PostContent content={content} />
    </Card>
  );
};

export default Post;
