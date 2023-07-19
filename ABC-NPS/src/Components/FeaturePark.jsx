import React, { useState, useEffect } from "react";
import getStateFullNames from "./helpers";
import { apiURL, apiKey, limit } from "./apiConfig.js";
import "./FeaturePark.css";

export default function FeaturePark({ selectedParkId }) {
  const [park, setPark] = useState(null);

  const fetchPark = async () => {
    try {
      const response = await fetch(
        `${apiURL}?limit=${limit}&api_key=${apiKey}`
      );
      const result = await response.json();
      const parks = result.data;
      const matchingPark = parks.find((park) => park.id === selectedParkId);
      if (matchingPark) {
        setPark(matchingPark);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPark();
  }, [selectedParkId]);

  const stateList = park ? getStateFullNames(park.states) : [];
  const locationText = stateList.length
    ? `Located in ${stateList.join(", ")}`
    : "";

  // Create a variable to hold the array of images
  const images = park ? park.images : [];

  // Render the images
  const renderImages = () => {
    return images.map((image, index) => (
      <div key={`${image.id}-${index}`}>
        <img src={image.url} alt={image.altText} />
        <h3>{image.title}</h3>
      </div>
    ));
  };

  return (
    <div className="feature-container">
      {park ? (
        <>
          <div className="feature-park">
            <h2>{park.fullName}</h2>
            <h3>{park.designation}</h3>
            <p>{locationText}</p>
            <p>{park.description}</p>
          </div>
          <div className="feature-images">{renderImages()}</div>
        </>
      ) : (
        <p>No park found.</p>
      )}
    </div>
  );
}
