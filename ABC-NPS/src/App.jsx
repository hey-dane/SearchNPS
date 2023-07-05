// App.jsx
import React, { useState, useEffect } from "react";
import PreviewList from "./Components/PreviewList";
import FeaturePark from "./Components/FeaturePark";
import Header from "./Components/Header";
import TravelWishlist from "./Components/TravelWishlist";

const App = () => {
  const [selectedParkId, setSelectedParkId] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleParkClick = (parkId) => {
    setSelectedParkId(parkId);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />

      <div className="main-container">
        <div className="content-container">
          <PreviewList
            updateSelectedParkId={handleParkClick}
            searchResults={searchResults}
          />
          {selectedParkId && (
            <div className="feature-container">
              <FeaturePark
                selectedParkId={selectedParkId}
                wishlist={wishlist}
                addToWishlist={(park) => setWishlist([...wishlist, park])}
                removeFromWishlist={(park) =>
                  setWishlist(wishlist.filter((item) => item.id !== park.id))
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
