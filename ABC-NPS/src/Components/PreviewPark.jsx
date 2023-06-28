import React, { useState } from "react";

export const PreviewPark = ({ park, handleClick }) => {
  const onClick = () => {
    handleClick(park);
  };

  return (
    <div className="preview-park" onClick={onClick}>
      <p>{park.fullName}</p>
      <p>{park.states}</p>
    </div>
  );
};

export default PreviewPark;
