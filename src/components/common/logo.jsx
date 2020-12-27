import React from "react";
import Typical from "react-typical";
import Classes from "./style.module.css";

const Logo = (props) => {
  return (
    <div className={props.style}>
      <p style={{ textAlign: "left", margin: "10px" }}>
        <span>Hi ! I am</span>
        <span style={{ color: "var(--clr-font-thirdly)" }}> Xinyu Tang,</span>{" "}
      </p>
      <p style={{ textAlign: "center", margin: "10px" }}>
        <span> a </span>
        {""}
        <Typical loop={1} wrapper="b" steps={["Software Engineer", 3000]} />
      </p>
    </div>
  );
};

export default Logo;
