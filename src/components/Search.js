import React from "react";

function Search({ query, setQuery }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="prompt"
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
