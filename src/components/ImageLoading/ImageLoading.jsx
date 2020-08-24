import React, { useState } from "react";
import Classes from "./ImageLoading.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const ImageLoading = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFile = (event) => {
    const types = ["image/jpg", "image/jpeg"];
    const file = event.target.files[0];
    if (file && types.includes(file.type)) {
      setFile(file);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form className={Classes.Form}>
      <label className={Classes.Label}>
        <input type="file" onChange={handleFile} />
        <span>+</span>
      </label>
      <div className={Classes.Output}>
        {error && <div className={Classes.Error}>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setfile={setFile} />}
      </div>
    </form>
  );
};

export default ImageLoading;
