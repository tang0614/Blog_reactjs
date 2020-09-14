import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Post.module.css";

const Post = (props) => {
  const { title, description, section, _id } = props;

  return (
    <article className={Classes.Article}>
      <div className={Classes.ArticleMain}>
        <strong>{title}</strong>
        <div>
          <em>Xinyu Tang | 2020</em>
        </div>
        <p>{description}</p>

        <Link className={Classes.ArticleAnchor} to={`./posts/${_id}`}>
          Continue Reading
        </Link>
      </div>
    </article>
  );
};

export default Post;
