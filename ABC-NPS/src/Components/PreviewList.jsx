import React, { useState, useEffect } from "react";
import PreviewPark from "./PreviewPark";
import FeaturePark from "./FeaturePark";
import { apiURL, apiKey, limit } from "./apiConfig";

export const PreviewList = ({
  updateSelectedParkId,
  searchResults,
  addToWishlist,
}) => {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [hiddenParks, setHiddenParks] = useState([]);

  useEffect(() => {
    // Fetch parks data
    async function fetchParks() {
      try {
        const response = await fetch(
          `${apiURL}?limit=${limit}&api_key=${apiKey}`
        );
        const result = await response.json();
        const parkData = result.data;
        const shuffledParks = parkData.sort(() => Math.random() - 0.5);
        setParks(shuffledParks);
      } catch (error) {
        console.error(error);
      }
    }
    fetchParks();
  }, []);

  useEffect(() => {
    // Filter parks based on search results
    if (searchResults && searchResults.length > 0) {
      setFilteredParks(searchResults);
    } else {
      setFilteredParks(parks);
    }
  }, [searchResults, parks]);

  const handleParkClick = (park) => {
    updateSelectedParkId(park.id);
  };

  const hidePark = (parkId) => {
    setHiddenParks([...hiddenParks, parkId]);
  };

  return (
    <div className="preview-container">
      <h2 className="preview-hd">National Parks & Recreation</h2>
      <div className="park-list">
        {filteredParks.length > 0 ? (
          filteredParks.map(
            (park) =>
              !hiddenParks.includes(park.id) && (
                <PreviewPark
                  key={park.id}
                  park={park}
                  handleClick={handleParkClick}
                  hidePark={hidePark}
                  addToWishlist={addToWishlist}
                />
              )
          )
        ) : (
          <div>No parks found.</div>
        )}
      </div>
    </div>
  );
};

export default PreviewList;
