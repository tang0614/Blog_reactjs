import React from "react";
import Typical from "react-typical";
import Classes from "./style.module.css";

const Logo = (props) => {
  return (
    <div className={props.style}>
      <h2>
        Hi! I am Xinyu Tang,
        <p className={Classes.Typing}>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " aspiring web developer",
              3000,
              " aspiring software engineer",
              3000,
            ]}
          />
        </p>
      </h2>
    </div>
  );
};

export default Logo;
