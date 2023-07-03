import React from "react";
import SearchComponent from "./SearchComponent";
import TravelWishlist from "./TravelWishlist";

const Header = ({
  onSearch,
  wishlist = [],
  addToWishlist,
  removeFromWishlist,
}) => {
  const handleAddToWishlist = (park) => {
    addToWishlist(park);
  };

  const handleRemoveFromWishlist = (park) => {
    removeFromWishlist(park);
  };

  return (
    <header>
      <SearchComponent onSearch={onSearch} /> {/* Pass onSearch function */}
      <TravelWishlist
        wishlist={wishlist}
        removeFromWishlist={handleRemoveFromWishlist}
      />
    </header>
  );
};

export default Header;
