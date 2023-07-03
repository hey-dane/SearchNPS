import React, { useState, useEffect } from "react";
import getStateFullNames from "./helpers";
import { apiURL, apiKey, limit } from "./apiConfig.js";

import "./FeaturePark.css";

export default function FeaturePark({
  selectedParkId,
  wishlist,
  addToWishlist,
}) {
  const [park, setPark] = useState(null);

  useEffect(() => {
    async function fetchPark() {
      try {
        const response = await fetch(
          `${apiURL}?limit=${limit}&api_key=${apiKey}`
        );
        const result = await response.json();
        const parks = result.data;
        const matchingPark = parks.find((park) => park.id === selectedParkId);
        setPark(matchingPark);
        console.log(matchingPark);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPark();
  }, [selectedParkId]);

  const stateList = park ? getStateFullNames(park.states) : [];

  // const handleAddToWishlist = () => {
  //   if (park) {
  //     addToWishlist([...wishlist, park]);
  //     console.log(`Added to wishlist: ${park.fullName}`);
  //   }
  // };

  return (
    <div className="feature-container">
      {park ? (
        <>
          <div className="feature-park">
            <h2>{park.fullName}</h2>
            <h3>{park.designation}</h3>
            <p>Located in {stateList.join(", ")}</p>
            <p>{park.description}</p>
            {/* <AddToWishlistButton onClick={handleAddToWishlist} /> */}
          </div>
        </>
      ) : (
        <p>Loading your next adventure...</p>
      )}
    </div>
  );
}
