import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import Classes from "./Project.module.css";

const Project = (props) => {
  const { title, description, imageSource } = props.article;
  const { github, live } = props.links;

  const mobileIcon =
    (description === " R | RShiny | CSS | Plotly.js") |
    (description === " Javascript | Canvas ")
      ? ""
      : "mobile alternate icon";

  const handleClick = (name) => {
    if (name === "github") {
      window.location = github;
    } else {
      window.location = live;
    }
  };

  return (
    <React.Fragment>
      <ScrollAnimation animateIn="fadeIn" delay={200}>
        <article className={Classes.Article}>
          <div className={Classes.ArticleMain}>
            <div className={Classes.Title}>{title}</div>
            <p>{description}</p>
          </div>
          <div className={Classes.ArticleSecondary}>
            <img
              src={window.location.origin + imageSource}
              className={Classes.ArticleImage}
            />

            <div className={Classes.Button}>
              <button
                className={Classes.Text}
                onClick={() => handleClick("live")}
              >
                View Live
              </button>

              <button
                className={Classes.Text}
                onClick={() => handleClick("github")}
              >
                View Code
              </button>
            </div>
            <div className={Classes.Screen}>
              <i className={mobileIcon}></i>
              <i className="desktop link icon"></i>
            </div>
            <div className={Classes.ExternalLink}>
              <i className="external link icon"></i>
            </div>
          </div>
        </article>
      </ScrollAnimation>
    </React.Fragment>
  );
};

export default Project;
