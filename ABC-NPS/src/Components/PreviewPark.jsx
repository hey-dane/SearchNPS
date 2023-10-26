import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMapMarkerPlusOutline } from "@mdi/js";
import { mdiEyeOff } from "@mdi/js";

const PreviewPark = ({ park, handleClick, hidePark, addToWishlist }) => {
  const [isMapIconClicked, setIsMapIconClicked] = useState(false);

  const handleMapIconClick = (event) => {
    event.stopPropagation();
    addToWishlist(park.fullName);
    setIsMapIconClicked(true);
    setTimeout(() => {
      setIsMapIconClicked(false);
    }, 200);
  };

  return (
    <div className="preview-park">
      <p onClick={() => handleClick(park)} id="feature-park-trigger">
        {park.fullName}
      </p>
      <p>{park.states.replace(/,/g, ", ")}</p>
      <div className="icon-container">
        <Icon path={mdiEyeOff} size={1} onClick={() => hidePark(park.id)} />
        <Icon
          path={mdiMapMarkerPlusOutline}
          size={isMapIconClicked ? 1.5 : 1}
          onClick={handleMapIconClick}
          className={`icon-button ${isMapIconClicked ? "enlarge" : ""}`}
          style={{ transition: "transform 0.2s" }}
        />
      </div>
    </div>
  );
};

export default PreviewPark;
