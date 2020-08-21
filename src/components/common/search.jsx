import React from "react";

const Search = (props) => {
  return (
    <form className={props.style} onSubmit={props.onSubmit}>
      <button
        type="submit"
        style={{ padding: 0, margin: 0, border: "none", outline: "none" }}
      >
        <img
          src={require("../../image/search.png")}
          height="21px"
          style={{ padding: 0, margin: 0 }}
        />
      </button>

      <input
        className={props.inputStyle}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="search posts ..."
      />
    </form>
  );
};

export default Search;
