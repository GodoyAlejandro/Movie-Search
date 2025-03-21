import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search any movie or series"
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
        />
        <button type="submit" >Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
