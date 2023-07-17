import React from "react";

const PreviewPark = ({ park, handleClick, hidePark, addToWishlist }) => {
  return (
    <div className="preview-park">
      <p onClick={() => handleClick(park)}>{park.fullName}</p>
      <p>{park.states.replace(/,/g, ", ")}</p>
      <button onClick={() => hidePark(park.id)}>Not Interested</button>
      <button
        onClick={(event) => {
          event.stopPropagation();
          addToWishlist(park.fullName);
        }}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default PreviewPark;
