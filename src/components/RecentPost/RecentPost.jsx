import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./RecentPost.module.css";

class RecentPost extends Component {
  render() {
    return <Card style={Classes.Card}>{"RecentPost"}</Card>;
  }
}

export default RecentPost;
