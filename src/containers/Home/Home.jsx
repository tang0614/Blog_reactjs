import Classes from "./Home.module.css";

import React, { Component } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Project from "../../components/Project/Project";
import http from "../../httpService";
import { useState } from "react";
import { useEffect } from "react";

const Home = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("component did mount/updated");
    http
      .get("/api")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        return { message: err };
      });
  }, []);

  return (
    <div className={Classes.Home} id="place-to-visit">
      <main className={Classes.Main}>
        <p style={{ color: "var(--clr-font-thirdly)" }} className={Classes.Title}>
          My Personal Projects - Everything Built from Scratch
        </p>
        {projects
          ? projects.map((project, id) => (
              <Project
                key={id}
                links={project.links}
                article={project.article}
              />
            ))
          : ""}
      </main>
      <aside className={Classes.Side}>
        <SideBar />
      </aside>
    </div>
  );
};

export default Home;
