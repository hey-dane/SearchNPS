import React from "react";

const TravelWishlist = ({ wishlist, removeFromWishlist }) => {
  const handleRemoveFromWishlist = (park) => {
    removeFromWishlist(park);
  };

  return (
    <div>
      <h2>Travel Wishlist</h2>
      {wishlist.map((park) => (
        <div key={park.id}>
          <span>{park.name}</span>
          <button onClick={() => handleRemoveFromWishlist(park)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TravelWishlist;
