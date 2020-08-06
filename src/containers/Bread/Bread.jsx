import React from "react";
import Post from "../../components/Post/Post";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./Bread.module.css";

const Bread = (props) => {
  return (
    <div className={Classes.Bread}>
      <Post {...props} />
      <SideBar {...props} />
    </div>
  );
};

export default Bread;
