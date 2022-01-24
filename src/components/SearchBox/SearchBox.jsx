import React, { useEffect, useState } from "react";
//styles
import "./SearchBox.styles.css";

const SearchBox = ({ handleGetValue, handleSearch, searchValue }) => {
  return (
    <div className="searchBox-card">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Type Planet name (e.g. Earth)"
          onChange={({ target }) => handleGetValue(target)}
          value={searchValue}
          id="searchBox"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
