import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Wishliststyle.css";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  const handleRemoveFromWishlist = (parkName) => {
    removeFromWishlist(parkName);
  };

  return (
    <div className="wishlist-container">
      <h2>Destination Wishlist</h2>
      <ul>
        {wishlist.map((park, index) => (
          <li key={index}>
            {park}
            <FontAwesomeIcon
              icon={faTimes}
              className="remove-icon"
              onClick={() => handleRemoveFromWishlist(park)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
