import React, { useState } from "react";
import Wishlist from "./Wishlist";
import "./Wishlist.css";

const WishlistButton = () => {
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
  };

  return (
    <div className="wishlist-button-container">
      <button className="wishlist-button" onClick={toggleWishlist}>
        Destination Wishlist
      </button>
    </div>
  );
};

export default WishlistButton;
