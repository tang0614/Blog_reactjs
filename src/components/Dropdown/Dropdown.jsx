import React from "react";
import Classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  const showDropDown = props.show === true ? "Active" : "NotActive";

  return (
    <nav className={Classes[showDropDown]}>
      <ul className={Classes.Dropdown}>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
        <li>Chocolate</li>
      </ul>
    </nav>
  );
};

export default Dropdown;
