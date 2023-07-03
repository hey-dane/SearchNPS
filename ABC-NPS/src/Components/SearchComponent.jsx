import React, { useState } from "react";
import { apiKey, limit, apiURL } from "./apiConfig";
import getStateFullNames from "./helpers";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [matchingResults, setMatchingResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("idle"); // "idle" | "searching" | "noMatch"
  const [error, setError] = useState(null); // New state for handling errors

  const performSearch = async (query) => {
    try {
      let url;
      const isStateCode = /^[A-Za-z]{2}$/.test(query);

      if (isStateCode) {
        url = `${apiURL}?limit=${limit}&stateCode=${query}&api_key=${apiKey}`;
      } else {
        setError("Invalid search query.");
        return;
      }

      const response = await fetch(url);
      const responseData = await response.json();
      const data = responseData.data;
      console.log("Search results:", data);

      onSearch(data.map((park) => park.id)); // Pass matching park IDs to onSearch
      setError(null);
    } catch (error) {
      console.error("Error performing search:", error);
      setError("An error occurred while performing the search.");
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    performSearch(query);
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch} disabled={searchStatus === "searching"}>
        {searchStatus === "searching" ? "Searching..." : "Search"}
      </button>
      {error && <div className="error">{error}</div>}{" "}
      {/* Render error message if error state is set */}
    </div>
  );
};

export default SearchComponent;
