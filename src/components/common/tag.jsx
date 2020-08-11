import React from "react";
import { Link } from "react-router-dom";

import Classes from "./style.module.css";

const Tag = (props) => {
  const Tag_classes = props.name === "ByIngredient" ? "Tag_Ingredient" : "";
  const handler = props.name === "ByIngredient" ? props.showDropdown : null;

  return (
    <Link to={`${props.path}`} className={props.nav_link_style}>
      <span className={Classes[Tag_classes]} onClick={handler}>
        {props.name}
      </span>
    </Link>
  );
};

export default Tag;
