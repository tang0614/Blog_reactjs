import React, { Component } from "react";
import Card from "../common/card";
import Classes from "./SideBar.module.css";
import postData from "../../data/posts.json";
import InstCard from "../common/InstCard";
import Nav from "../common/nav";

class SideBar extends Component {
  state = {
    about_card: {
      name: "About",
      path: "about",
      imageLocation: "me",
      content: "I am a shiba inu and my hobby is baking! Join with me!",
    },
    contact_card: {
      contact_name: "Contact",
      contact_path: "contact",
      contact_imageLocation: "contact",
      contact_content: "Email: xinyu.tang0614@gmail.com",
    },

    link: [{ name: "", path: "" }],
  };

  componentDidMount() {
    const posts = postData.data;
    const link = posts.map((post) => {
      return { name: post.title, path: `${post.id}` };
    });
    this.setState({ link });
  }

  componentDidUpdate(preProps) {
    console.log(preProps.location.pathname);
  }
  render() {
    const { name, path, content, imageLocation } = this.state.about_card;
    const {
      contact_name,
      contact_path,
      contact_content,
      contact_imageLocation,
    } = this.state.contact_card;
    console.log(this.state.link);
    return (
      <Card style={Classes.Side}>
        <Card style={Classes.CardAbout}>
          {
            <InstCard
              name={name}
              path={path}
              imageLocation={imageLocation}
              content={content}
            />
          }
        </Card>
        <Card style={Classes.CardPosts}>
          {
            <div>
              <h3 className={Classes.SideBar}>{"Posts"}</h3>
              <Nav link={this.state.link} nav_link_style={Classes.Nav_link} />
            </div>
          }
        </Card>
        <Card style={Classes.CardAbout}>
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
  }
}

export default SideBar;
