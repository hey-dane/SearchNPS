import React from "react";

export const PreviewPark = ({ park, handleClick, onAddToWishlist }) => {
  const onClick = () => {
    handleClick(park);
  };

  const addToWishlist = () => {
    onAddToWishlist(park);
  };

  return (
    <div className="preview-park-component">
      <div className="preview-park" onClick={onClick}>
        <p>{park.fullName}</p>
        <p>{park.states}</p>
      </div>
      <button onClick={addToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default PreviewPark;
