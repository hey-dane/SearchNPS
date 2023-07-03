import React, { useState, useEffect } from "react";
import { PreviewPark } from "./PreviewPark";
import "./Preview.css";
import { apiURL, apiKey, limit } from "./apiConfig";

export const PreviewList = ({ setSelectedParkId, matchingResults }) => {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);

  const handleClick = (park) => {
    setSelectedParkId(park.id);
  };

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
        console.log(shuffledParks);
      } catch (error) {
        console.error(error);
      }
    }
    fetchParks();
  }, []);

  useEffect(() => {
    // Filter the parks data based on the matchingResults
    const filteredParks = parks.filter((park) =>
      matchingResults.includes(park.id)
    );
    setFilteredParks(filteredParks);
  }, [matchingResults, parks]);

  const displayParks = matchingResults.length > 0 ? filteredParks : parks;

  return (
    <div className="preview-container">
      <h2 className="preview-hd">National Parks & Recreation</h2>
      <div className="list-hd">Name and Location</div>
      <div className="park-list">
        {displayParks.map((park) => (
          <PreviewPark key={park.id} park={park} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default PreviewList;
