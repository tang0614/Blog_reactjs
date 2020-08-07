import React, { Component } from "react";
import SocialLink from "../common/socialLink";
import Classes from "./SocialBar.module.css";

import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

class SocialBar extends Component {
  state = {
    data: [
      {
        link: "https://twitter.com/xinyu_TangTang/following",
        icon: faTwitter,
      },
      { link: "https://www.instagram.com/", icon: faInstagram },
      { link: "https://www.facebook.com/", icon: faFacebook },
    ],
  };
  render() {
    const socialArr = this.state.data.map((el, id) => (
      <SocialLink key={id} link={el.link} icon={el.icon} />
    ));
    return <div className={this.props.style}>{socialArr}</div>;
  }
}

export default SocialBar;
