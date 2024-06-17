import React from "react";

function SearchBar({userSearch, setUserSearch}) {

    function handleSearch(event) {
      setUserSearch(event.target.value)
    }

  return(
    <input
      type="text"
      id="search"
      placeholder="Search by username"
      value={userSearch}
      onChange={handleSearch}
    >
    </input>
  )
}

export default SearchBar;
