import React, { setState } from "react";
import { Link, withRouter } from "react-router-dom";

import Classes from "./style.module.css";
import Dropdown from "../Dropdown/Dropdown";

const Tag = (props) => {
  const Tag_classes = props.name === "Small Projects" ? "Tag_Ingredient" : null;
  const type = props.type === "search" ? "search" : "other";
  const changeDropdown =
    !props.isDrop && props.name === "Small Projects"
      ? props.changeDropdown
      : null;

  const removeDropdown =
    !props.isDrop && props.name === "Small Projects"
      ? props.removeDropdown
      : null;

  return (
    <Link
      to={{ pathname: props.path, state: { prevPath: type } }}
      className={props.nav_link_style}
    >
      <span
        className={Classes[Tag_classes]}
        onMouseEnter={changeDropdown}
        onMouseLeave={removeDropdown}
        onClick={changeDropdown}
      >
        <i>{props.name}</i>
        {Tag_classes && <i className="fas fa-caret-down" />}
        {props.name === "Small Projects" && (
          <Dropdown showDropdown={props.showDropdown} />
        )}
      </span>
    </Link>
  );
};

export default withRouter(Tag);
