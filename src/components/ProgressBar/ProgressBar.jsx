import React, { useState, useEffect } from "react";
import Classes from "./ProgressBar.module.css";
import useStorage from "../../hook/useStorage";
const ProgressBar = ({ file, setfile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);

  return <div className={Classes.Bar} style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
