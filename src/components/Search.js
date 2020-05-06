import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const resetSearchInput = () => {
    setSearchValue("");
  };
  const callSearch = (e) => {
    e.preventDefault();
    search(searchValue);
    resetSearchInput();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearch} type="submit" value="SEARCH!" />
    </form>
  );
};

export default Search;
