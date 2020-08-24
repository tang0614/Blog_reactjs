import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Classes from "./style.module.css";
const SocialLink = (props) => {
  return (
    <a href={props.link} className={Classes.SocialLink}>
      <FontAwesomeIcon icon={props.icon} style={{ color: "black" }} />
    </a>
  );
};

export default SocialLink;
