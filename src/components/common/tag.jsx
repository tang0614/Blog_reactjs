import React, { Component } from "react";
import { Link } from "react-router-dom";

const Tag = (props) => {
  return (
    <Link to={`${props.path}`} className={props.nav_link_style}>
      {props.name}
    </Link>
  );
};

export default Tag;
