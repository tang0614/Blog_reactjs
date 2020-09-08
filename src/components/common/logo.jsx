import React from "react";
import Typical from "react-typical";
import Classes from "./style.module.css";

const Logo = (props) => {
  return (
    <div className={props.style}>
      <p style={{ margin: "0" }}>
        Hi! I am{" "}
        <span style={{ color: "rgb(10,186,181,0.4)" }}>Xinyu Tang</span>,
      </p>
      <p style={{ margin: "0" }}>
        <Typical
          loop={1}
          wrapper="b"
          steps={[
            " aspiring web developer",
            3000,
            " aspiring software engineer",
            3000,
          ]}
        />
      </p>
    </div>
  );
};

export default Logo;
