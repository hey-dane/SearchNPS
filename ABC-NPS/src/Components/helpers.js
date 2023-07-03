const getStateFullNames = (stateAbbreviations) => {
  const states = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  return stateAbbreviations
    .split(",")
    .map((abbreviation) => states[abbreviation.trim()]);
};

export default getStateFullNames;

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
