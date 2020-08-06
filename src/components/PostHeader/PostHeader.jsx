import React from "react";
import Classes from "./PostHeader.module.css";
import Card from "../common/card";
import Nav from "../common/nav";

const PostHeader = (props) => {
  console.log(props.link);
  return <Nav link={props.link} nav_link_style={Classes.Nav_link} />;
};

export default PostHeader;
