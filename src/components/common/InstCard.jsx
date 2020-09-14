import React from "react";
import Tag from "./tag";
import Classes from "./style.module.css";

const InstCard = (props) => {
  return (
    <div>
      <Tag {...props} nav_link_style={Classes.Nav_link} />
      <img
        className={Classes.Img}
        src={window.location.origin + `/image/${props.imageLocation}.jpg`}
      />
      <p className={Classes.Intro}>{props.content}</p>
    </div>
  );
};

export default InstCard;
