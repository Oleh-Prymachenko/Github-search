import React from "react";

export const SearchBar = ({ setSearchParam }) => {
  const hanldeSearch = (e) => {
    e.preventDefault();
    setSearchParam(e.target.elements.query.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => hanldeSearch(e)}>
      <input
        type="text"
        name="query"
        className="search-input"
        placeholder="Search"
      />
    </form>
  );
};
