import React, { useState, useEffect } from "react";
import { PreviewPark } from "./PreviewPark";
import { FeaturePark } from "./FeaturePark";
import "./Preview.css";

export const PreviewList = ({ setSelectedParkId, selectedParkId }) => {
  const [parks, setParks] = useState([]);

  const handleClick = (park) => {
    setSelectedParkId(park.id);
  };

  useEffect(() => {
    async function fetchParks() {
      try {
        const response = await fetch(
          "https://developer.nps.gov/api/v1/parks?limit=500&api_key=5IXSbwf3duWB9eBrOQR4rgzXTht6EcT1VfapdmFr"
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
  return (
    <div className="preview-container">
      <h2 className="preview-hd">National Parks & Recreation</h2>
      <div className="list-hd">Name and Location</div>
      <div className="park-list">
        {parks.map((park) => (
          <PreviewPark key={park.id} park={park} handleClick={handleClick} />
        ))}
      </div>
      {selectedParkId && (
        <div className="feature-park">
          <FeaturePark selectedParkId={selectedParkId} />
        </div>
      )}
    </div>
  );
};
export default PreviewList;

/* <>this says if select contact is truth, provide that contactn, if falsy, provide the contact list
  {selectedContactId ? (
    <SelectedContact selectedContactId={selectedContactId} />
  ) : (
    <ContactList setSelectedContactId={setSelectedContactId} />
  )}
</>; */
