import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = (props) => {
  return (
    <a href={props.link} className={props.style}>
      <FontAwesomeIcon icon={props.icon} color={"grey"} size="lg" />
    </a>
  );
};

export default SocialLink;
