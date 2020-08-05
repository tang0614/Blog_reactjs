import React from "react";

const Search = (props) => {
  return (
    <div className={props.style}>
      <img src={require("../../image/search.png")} height="21px" />
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
