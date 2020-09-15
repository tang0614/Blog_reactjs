import React from "react";
import Card from "../common/card";
import Classes from "./SideBar.module.css";
import InstCard from "../common/InstCard";
import Nav from "../common/nav";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const info = {
  about_card: {
    name: "About",
    path: "/about",
    imageLocation: "about",
    content: "Listen to my story!",
  },
  contact_card: {
    contact_name: "Contact",
    contact_path: "/contact",
    contact_imageLocation: "me",
    contact_content: "Email: xinyu.tang0614@gmail.com",
  },
};

const SideBar = (props) => {
  const { name, path, content, imageLocation } = info.about_card;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        return { message: err };
      });
  }, []);

  const link = posts
    ? posts.map((post) => {
        return {
          name: post.title,
          path: `/posts/${post._id}`,
        };
      })
    : "";

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
        <strong className={Classes.SideBar}>{"Other Posts"}</strong>
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
