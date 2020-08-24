import React, { useState, useEffect } from "react";
import useFirestore from "../../hook/useFirestore";
import Classes from "./ImageGrid.module.css";

const ImageGrid = ({ props }) => {
  const { docs } = useFirestore("images");

  return (
    <div className={Classes.Grid}>
      {docs &&
        docs.map((doc) => (
          <div
            className={Classes.Wrap}
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
          >
            <img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
