import React, { setState } from "react";
import { Link } from "react-router-dom";

import Classes from "./style.module.css";
import Dropdown from "../Dropdown/Dropdown";

const Tag = (props) => {
  const Tag_classes = props.name === "ByIngredient" ? "Tag_Ingredient" : null;
  const onClickMethod =
    props.name === "ByIngredient" ? props.changeDropdown : null;

  return (
    <Link to={`${props.path}`} className={props.nav_link_style}>
      <span className={Classes[Tag_classes]} onClick={onClickMethod}>
        {props.name}
        {Tag_classes && <i className="fas fa-caret-down" />}
        {props.name === "ByIngredient" && props.showDropdown && (
          <Dropdown showDropdown={props.showDropdown} />
        )}
      </span>
    </Link>
  );
};

export default Tag;
