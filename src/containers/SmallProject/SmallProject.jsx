import React from "react";
import Classes from "./SmallProject.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import Project from "../../components/Project/Project";

const SmallProject = (props) => {
  const [project, setProject] = useState("");

  useEffect(() => {
    axios
      .get(`/api/side/${props.match.params._id}`)
      .then((res) => setProject(res.data))
      .catch((err) => {
        return { message: err };
      });
  }, [project]);

  return (
    <div className={Classes.Project}>
      <main className={Classes.Main}>
        {project ? (
          <Project links={project.links} article={project.article} />
        ) : (
          ""
        )}
      </main>
      <aside className={Classes.Side}>
        <SideBar />
      </aside>
    </div>
  );
};

export default SmallProject;
