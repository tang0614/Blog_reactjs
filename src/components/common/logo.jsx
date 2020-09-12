import React from "react";
import Typical from "react-typical";
import Classes from "./style.module.css";

const Logo = (props) => {
  return (
    <div className={props.style}>
      <p style={{ textAlign: "left", margin: "10px" }}>
        <span> Hi ! I am Xinyu Tang ,</span>{" "}
      </p>
      <p style={{ textAlign: "center", margin: "10px" }}>
        <span style={{ color: "rgb(10,186,181,0.7)" }}>
          {" "}
          aspiring full-stack
        </span>
        <Typical loop={1} wrapper="b" steps={[" Web Developer", 3000]} />
      </p>
    </div>
  );
};

export default Logo;
