import React from "react";
//styles
import "./SearchBox.styles.css";

const SearchBox = ({ handleGetValue, handleSearchById, searchValue }) => {
  return (
    <div className="searchBox-card">
      <form onSubmit={handleSearchById}>
        <input
          type="text"
          placeholder="Type location id here (1 - 126)"
          onChange={({ target }) => handleGetValue(target)}
          value={searchValue}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
