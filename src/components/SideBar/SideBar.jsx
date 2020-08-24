import React from "react";
import Card from "../common/card";
import Classes from "./SideBar.module.css";
import InstCard from "../common/InstCard";
import Nav from "../common/nav";
import cakeData from "../../data/cake.json";

const posts = cakeData.data;

const link = posts.map((post) => {
  return {
    name: post.title,
    path: `/cake/${post.id}`,
  };
});

const info = {
  about_card: {
    name: "About",
    path: "/about",
    imageLocation: "me",
    content: "I am a shiba inu and my hobby is baking! Join with me!",
  },
  contact_card: {
    contact_name: "Contact",
    contact_path: "/contact",
    contact_imageLocation: "contact",
    contact_content: "Email: xinyu.tang0614@gmail.com",
  },
};

const SideBar = (props) => {
  const { name, path, content, imageLocation } = info.about_card;
  const {
    contact_name,
    contact_path,
    contact_content,
    contact_imageLocation,
  } = info.contact_card;

  return (
    <Card style={Classes.Side}>
      <Card style={Classes.Card}>
        {
          <InstCard
            name={name}
            path={path}
            imageLocation={imageLocation}
            content={content}
          />
        }
      </Card>

      <Card style={Classes.Card}>
        <h3 className={Classes.SideBar}>{"Other Posts"}</h3>
        <Nav link={link} nav_link_style={Classes.Nav_link} />
      </Card>

      <Card style={Classes.Card}>
        {
          <InstCard
            name={contact_name}
            path={contact_path}
            imageLocation={contact_imageLocation}
            content={contact_content}
          />
        }
      </Card>
    </Card>
  );
};

export default SideBar;
