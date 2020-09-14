import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Classes from "./Project.module.css";

const Project = (props) => {
  const { title, description, imageSource } = props.article;
  const { github, live } = props.links;

  const handleClick = (name) => {
    if (name === "github") {
      window.location = github;
    } else {
      window.location = live;
    }
  };
  return (
    <article className={Classes.Article}>
      <div className={Classes.ArticleMain}>
        <strong>{title}</strong>
        <p>{description}</p>
        <a className={Classes.ArticleAnchor}>Continue Reading</a>
      </div>
      <div className={Classes.ArticleSecondary}>
        <img
          src={window.location.origin + imageSource}
          className={Classes.ArticleImage}
        />
        <div className={Classes.Button}>
          <button className={Classes.Text} onClick={() => handleClick("live")}>
            Live
          </button>
          <button
            className={Classes.Text}
            onClick={() => handleClick("github")}
          >
            Github
          </button>
        </div>

        <p>React | Redux | Nodejs | Express | Mongodb</p>
      </div>
    </article>
  );
};

export default Project;
