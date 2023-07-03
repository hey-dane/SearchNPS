import React, { useState } from "react";
import PreviewList from "./Components/PreviewList";
import FeaturePark from "./Components/FeaturePark";
import Header from "./Components/Header";
import TravelWishlist from "./Components/TravelWishlist";

const App = () => {
  const [selectedParkId, setSelectedParkId] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [matchingResults, setMatchingResults] = useState([]);

  const handleSearch = (results) => {
    setMatchingResults(results);
    setSelectedParkId(null);
  };

  const handleParkClick = (parkId) => {
    setSelectedParkId(parkId);
  };

  return (
    <div>
      <Header
        onSearch={handleSearch} // Pass the handleSearch function
        wishlist={wishlist}
        addToWishlist={(park) => setWishlist([...wishlist, park])}
        removeFromWishlist={(park) =>
          setWishlist(wishlist.filter((item) => item.id !== park.id))
        }
      />

      <div className="main-container">
        <div className="content-container">
          <PreviewList
            setSelectedParkId={handleParkClick}
            selectedParkId={selectedParkId}
            matchingResults={matchingResults} // Pass matchingResults as a prop
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
