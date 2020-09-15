import React from "react";
import Classes from "./PostContent.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../SideBar/SideBar";

const PostContent = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`/api/posts/${props.match.params._id}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        return { message: err };
      });
  }, [post]);

  return (
    <div className={Classes.Post}>
      <main className={Classes.Main}>
        <p className={Classes.Title}>
          <strong>{post.title}</strong>
        </p>
        {post
          ? post.section.map((element, id) => {
              return (
                <div className={Classes.Section} key={id}>
                  <strong className={Classes.Content}>
                    {element.subTitile}
                  </strong>
                  <p className={Classes.Content}>{element.content}</p>
                  <img
                    alt={element.imageSource}
                    className={Classes.Img}
                    src={window.location.origin + `${element.imageSource}.png`}
                  />
                </div>
              );
            })
          : ""}
      </main>
      <aside className={Classes.Side}>
        <SideBar />
      </aside>
    </div>
  );
};

export default PostContent;
