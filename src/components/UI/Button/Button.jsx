import React from "react";
import Classes from "./Button.module.css";
const Button = ({ onClick, disable, children, btnType }) => {
  if (disable) {
    console.log("button disabled");
  }
  return (
    <button
      className={[Classes.Button, Classes[btnType]].join(" ")}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
