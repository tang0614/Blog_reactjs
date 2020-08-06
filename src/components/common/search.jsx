import React from "react";

const Search = (props) => {
  return (
    <form className={props.style} onSubmit={props.onSubmit}>
      <img src={require("../../image/search.png")} height="21px" />
      <input
        className={props.inputStyle}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="search..."
      />
    </form>
  );
};

export default Search;
