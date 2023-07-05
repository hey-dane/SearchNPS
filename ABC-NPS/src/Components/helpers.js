const getStateFullNames = (stateAbbreviations) => {
  const stateMap = new Map([
    ["AL", "Alabama"],
    ["AK", "Alaska"],
    ["AZ", "Arizona"],
    ["AR", "Arkansas"],
    ["CA", "California"],
    ["CO", "Colorado"],
    ["CT", "Connecticut"],
    ["DE", "Delaware"],
    ["FL", "Florida"],
    ["GA", "Georgia"],
    ["HI", "Hawaii"],
    ["ID", "Idaho"],
    ["IL", "Illinois"],
    ["IN", "Indiana"],
    ["IA", "Iowa"],
    ["KS", "Kansas"],
    ["KY", "Kentucky"],
    ["LA", "Louisiana"],
    ["ME", "Maine"],
    ["MD", "Maryland"],
    ["MA", "Massachusetts"],
    ["MI", "Michigan"],
    ["MN", "Minnesota"],
    ["MS", "Mississippi"],
    ["MO", "Missouri"],
    ["MT", "Montana"],
    ["NE", "Nebraska"],
    ["NV", "Nevada"],
    ["NH", "New Hampshire"],
    ["NJ", "New Jersey"],
    ["NM", "New Mexico"],
    ["NY", "New York"],
    ["NC", "North Carolina"],
    ["ND", "North Dakota"],
    ["OH", "Ohio"],
    ["OK", "Oklahoma"],
    ["OR", "Oregon"],
    ["PA", "Pennsylvania"],
    ["RI", "Rhode Island"],
    ["SC", "South Carolina"],
    ["SD", "South Dakota"],
    ["TN", "Tennessee"],
    ["TX", "Texas"],
    ["UT", "Utah"],
    ["VT", "Vermont"],
    ["VA", "Virginia"],
    ["WA", "Washington"],
    ["WV", "West Virginia"],
    ["WI", "Wisconsin"],
    ["WY", "Wyoming"],
  ]);

  return stateAbbreviations
    .split(",")
    .map((abbreviation) => stateMap.get(abbreviation.trim()));
};

export default getStateFullNames;

// export const convertStateToCode = (stateName) => {
//   const stateMappings = {
//     Alabama: "AL",
//     Alaska: "AK",
//     Arizona: "AZ",
//     Arkansas: "AR",
//     California: "CA",
//     Colorado: "CO",
//     Connecticut: "CT",
//     Delaware: "DE",
//     Florida: "FL",
//     Georgia: "GA",
//     Hawaii: "HI",
//     Idaho: "ID",
//     Illinois: "IL",
//     Indiana: "IN",
//     Iowa: "IA",
//     Kansas: "KS",
//     Kentucky: "KY",
//     Louisiana: "LA",
//     Maine: "ME",
//     Maryland: "MD",
//     Massachusetts: "MA",
//     Michigan: "MI",
//     Minnesota: "MN",
//     Mississippi: "MS",
//     Missouri: "MO",
//     Montana: "MT",
//     Nebraska: "NE",
//     Nevada: "NV",
//     "New Hampshire": "NH",
//     "New Jersey": "NJ",
//     "New Mexico": "NM",
//     "New York": "NY",
//     "North Carolina": "NC",
//     "North Dakota": "ND",
//     Ohio: "OH",
//     Oklahoma: "OK",
//     Oregon: "OR",
//     Pennsylvania: "PA",
//     "Rhode Island": "RI",
//     "South Carolina": "SC",
//     "South Dakota": "SD",
//     Tennessee: "TN",
//     Texas: "TX",
//     Utah: "UT",
//     Vermont: "VT",
//     Virginia: "VA",
//     Washington: "WA",
//     "West Virginia": "WV",
//     Wisconsin: "WI",
//     Wyoming: "WY",
//   };
//   const lowerCaseStateName = stateName.toLowerCase();
//   return stateMappings[lowerCaseStateName] || "";
// };

export const convertStateToCode = (stateName) => {
  // Convert state name to lowercase for case-insensitive matching
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

import { useState } from "react";

export const useParkClickHandler = () => {
  const [selectedParkId, setSelectedParkId] = useState(null);
  const handleParkClick = (parkId) => {
    setSelectedParkId(parkId);
  };
  return { selectedParkId, handleParkClick };
};

export const removeFromWishlist = (parkId, wishlist, setWishlist) => {
  // Remove the park with the specified ID from the wishlist
  const updatedWishlist = wishlist.filter((park) => park.id !== parkId);
  setWishlist(updatedWishlist);
};

export const addToWishlist = (park, wishlist, setWishlist) => {
  // Add the park to the wishlist
  const updatedWishlist = [...wishlist, park];
  setWishlist(updatedWishlist);
};
