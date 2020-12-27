import React from "react";

const Search = (props) => {
  return (
    <form className={props.style} onSubmit={props.onSubmit}>
      <button
        type="submit"
        style={{
          padding: 0,
          margin: 0,
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={window.location.origin + "/image/search.png"}
          height="20px"
          style={{ padding: 0, margin: 0 }}
        />
      </button>

      <input
        className={props.inputStyle}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="search posts here..."
       
      />
    </form>
  );
};

export default Search;
