import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Classes from "./style.module.css";

const SocialLink = (props) => {
  return (
    <a href={props.link} className={props.style}>
      <FontAwesomeIcon icon={props.icon} color={"grey"} />
    </a>
  );
};

export default SocialLink;
