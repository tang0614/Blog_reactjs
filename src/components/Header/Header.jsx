import React from "react";
import Classes from "./Header.module.css";
import Card from "../common/card";
import Nav from "../common/nav";
import SocialBar from "../Social/SocialBar";

const link = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT US", path: "/contact" },
];

const Header = () => {
  return (
    <Card style={Classes.Header}>
      <Nav link={link} nav_link_style={Classes.Nav_link} />
      <SocialBar style={Classes.SocialBar} />
    </Card>
  );
};

export default Header;
