import React, { useState, useEffect } from "react";
import getStateFullNames from "./helpers";
import "./FeaturePark.css";

export const FeaturePark = ({ selectedParkId }) => {
  const [park, setPark] = useState(null);

  useEffect(() => {
    async function fetchPark() {
      try {
        const response = await fetch(
          "https://developer.nps.gov/api/v1/parks?limit=500&api_key=5IXSbwf3duWB9eBrOQR4rgzXTht6EcT1VfapdmFr"
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

  return (
    <div className="feature-container">
      {park ? (
        <>
          <div className="feature-park">
            <h2>{park.fullName}</h2>
            <h3>{park.designation}</h3>
            <p>Located in {stateList.join(", ")}</p>
            <p>{park.description}</p>
          </div>
        </>
      ) : (
        <p>Loading your next adventure...</p>
      )}
    </div>
  );
};

export default FeaturePark;
