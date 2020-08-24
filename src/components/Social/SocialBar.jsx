import React from "react";
import SocialLink from "../common/socialLink";

import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const data = [
  {
    link: "https://twitter.com/xinyu_TangTang/following",
    icon: faTwitter,
  },
  { link: "https://www.instagram.com/", icon: faInstagram },
  { link: "https://www.facebook.com/", icon: faFacebook },
];

const SocialBar = (props) => {
  const socialArr = data.map((el, id) => (
    <SocialLink key={id} link={el.link} icon={el.icon} />
  ));

  return <div className={props.style}>{socialArr}</div>;
};

export default SocialBar;
