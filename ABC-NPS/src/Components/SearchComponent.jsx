import React, { useState } from "react";

import { apiKey, limit, apiURL } from "./apiConfig";

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const convertStateToCode = (stateName) => {
    const lowerCaseStateName = stateName.toLowerCase();

    switch (lowerCaseStateName) {
      case "alabama":
        return "AL";
      case "alaska":
        return "AK";
      case "arizona":
        return "AZ";
      case "arkansas":
        return "AR";
      case "california":
        return "CA";
      case "colorado":
        return "CO";
      case "connecticut":
        return "CT";
      case "delaware":
        return "DE";
      case "florida":
        return "FL";
      case "georgia":
        return "GA";
      case "hawaii":
        return "HI";
      case "idaho":
        return "ID";
      case "illinois":
        return "IL";
      case "indiana":
        return "IN";
      case "iowa":
        return "IA";
      case "kansas":
        return "KS";
      case "kentucky":
        return "KY";
      case "louisiana":
        return "LA";
      case "maine":
        return "ME";
      case "maryland":
        return "MD";
      case "massachusetts":
        return "MA";
      case "michigan":
        return "MI";
      case "minnesota":
        return "MN";
      case "mississippi":
        return "MS";
      case "missouri":
        return "MO";
      case "montana":
        return "MT";
      case "nebraska":
        return "NE";
      case "nevada":
        return "NV";
      case "new hampshire":
        return "NH";
      case "new jersey":
        return "NJ";
      case "new mexico":
        return "NM";
      case "new york":
        return "NY";
      case "north carolina":
        return "NC";
      case "north dakota":
        return "ND";
      case "ohio":
        return "OH";
      case "oklahoma":
        return "OK";
      case "oregon":
        return "OR";
      case "pennsylvania":
        return "PA";
      case "rhode island":
        return "RI";
      case "south carolina":
        return "SC";
      case "south dakota":
        return "SD";
      case "tennessee":
        return "TN";
      case "texas":
        return "TX";
      case "utah":
        return "UT";
      case "vermont":
        return "VT";
      case "virginia":
        return "VA";
      case "washington":
        return "WA";
      case "west virginia":
        return "WV";
      case "wisconsin":
        return "WI";
      case "wyoming":
        return "WY";
      default:
        return "";
    }
  };

  const performSearch = async () => {
    setSearchResults([]);

    // Check if the search query matches stateCode
    if (searchQuery.length === 2) {
      const stateCodeQuery = searchQuery.toUpperCase();
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${stateCodeQuery}&api_key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.data);
          onSearch(data.data); // Update PreviewList with search results
        })
        .catch((error) => console.log(error));
    } else {
      const stateCode = convertStateToCode(searchQuery);
      if (stateCode) {
        fetch(
          `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.data);
            onSearch(data.data); // Update PreviewList with search results
          })
          .catch((error) => console.log(error));
      } else {
        fetch(
          `https://developer.nps.gov/api/v1/parks?limit=500&api_key=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            const filteredParks = data.data.filter((park) =>
              park.fullName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredParks);
            onSearch(filteredParks); // Update PreviewList with search results
          })
          .catch((error) => console.log(error));
      }
    }
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    performSearch();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for parks..."
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
