import React, { useState, useEffect } from "react";

const Search = ({ onHandleSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onHandleSearch(search);
  }, [search]);

  return (
    <input
      type="text"
      placeholder="search here"
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
};

export default Search;
