import React from "react";

const Card = (props) => {
  return <div className={props.style}>{props.children}</div>;
};

export default Card;
