import React from "react";
import Classes from "./Input.module.css";

const Input = ({
  elementName,
  elementConfig,
  elementType,
  value,
  onChange,
  valid,
  touched,
}) => {
  let inputClasses = [Classes.InputElement];

  if (!valid & touched) {
    inputClasses.push(Classes.Invalid);
  }

  let inputElement = null;

  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          name={elementName}
          type={elementConfig.type}
          placeholder={elementConfig.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;
    case "textarea":
      inputElement = <textarea className={Classes.InputElement} />;
      break;
    case "select":
      inputElement = (
        <select
          className={Classes.InputElement}
          value={value}
          onChange={onChange}
        >
          {elementConfig.options.map((opt, id) => {
            return (
              <option key={opt.value + id} value={opt.value}>
                {opt.displayValue}
              </option>
            );
          })}
        </select>
      );

      break;
    default:
      inputElement = <input className={Classes.InputElement} />;
  }
  return (
    <div className={Classes.Input}>
      <label className={Classes.Label}>{elementName}</label>
      {inputElement}
    </div>
  );
};

export default Input;
