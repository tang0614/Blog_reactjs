import React from "react";
import Card from "../common/card";
import Classes from "./SideBar.module.css";

import InstCard from "../common/InstCard";
import Nav from "../common/nav";

const SideBar = (props) => {
  const { name, path, content, imageLocation } = props.about_card;
  const {
    contact_name,
    contact_path,
    contact_content,
    contact_imageLocation,
  } = props.contact_card;

  const {
    cake_name,
    cake_path,
    cake_content,
    cake_imageLocation,
  } = props.cake_card;

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
        {
          <div>
            <h3 className={Classes.SideBar}>{"Recent Posts"}</h3>
            <Nav link={props.link} nav_link_style={Classes.Nav_link} />
          </div>
        }
      </Card>

      <Card style={Classes.Card}>
        {
          <InstCard
            name={cake_name}
            path={cake_path}
            imageLocation={cake_imageLocation}
            content={cake_content}
          />
        }
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
