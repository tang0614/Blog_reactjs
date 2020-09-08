import React from "react";
import SocialLink from "../common/socialLink";

import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const data = [
  {
    link: "https://twitter.com/xinyu_TangTang/following",
    icon: faTwitter,
  },
  { link: "https://www.linkedin.com/in/xinyu-tang-anna/", icon: faLinkedin },
  { link: "https://github.com/tang0614", icon: faGithub },
];

const SocialBar = (props) => {
  const socialArr = data.map((el, id) => (
    <SocialLink key={id} link={el.link} icon={el.icon} style={props.style} />
  ));

  return <div>{socialArr}</div>;
};

export default SocialBar;
