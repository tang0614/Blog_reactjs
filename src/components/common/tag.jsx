import React from "react";

const Tag = (props) => {
  return (
    <a href="#" className={props.nav_link_style}>
      {props.name}
    </a>
  );
};

export default Tag;
