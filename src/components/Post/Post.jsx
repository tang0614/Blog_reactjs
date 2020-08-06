import React from "react";
import Card from "../common/card";
import Classes from "./Post.module.css";
import PostContent from "../common/postContent";
import PostHeader from "../common/postHeader";
import PostImage from "../common/postImage";

const Post = (props) => {
  const { category, title, imageLocation, by, content } = props.post;

  return (
    <Card style={Classes.Card}>
      <PostHeader category={category} title={title} by={by} />
      <PostImage imageLocation={imageLocation} />
      <PostContent content={content} />
    </Card>
  );
};

export default Post;
