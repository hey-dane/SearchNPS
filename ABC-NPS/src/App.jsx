import React, { useState, useEffect } from "react";
import PreviewList from "./Components/PreviewList";
import FeaturePark from "./Components/FeaturePark";
import Header from "./Components/Header";
import Wishlist from "./Components/Wishlist";
import Loading from "./Components/Loading";

const App = () => {
  const [selectedParkId, setSelectedParkId] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (results) => {
    setLoading(true);

    setTimeout(() => {
      setSearchResults(results);
      setLoading(false);
    }, 2000);
  };

  const addToWishlist = (parkName) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.includes(parkName)) {
        return [...prevWishlist, parkName];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (parkName) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((park) => park !== parkName)
    );
  };

  const handleParkClick = (parkId) => {
    setSelectedParkId(null);
    setIsModalOpen(true);
    setTimeout(() => setSelectedParkId(parkId), 0);
  };

  useEffect(() => {
    if (!loading) {
    }
  }, [loading]);

  return (
    <div className="app">
      {loading && (
        <div className="loading-overlay">
          <Loading />
        </div>
      )}

      <Header onSearch={handleSearch} />

      <div className="main-container">
        <div className="content-container">
          <PreviewList
            updateSelectedParkId={handleParkClick}
            searchResults={loading ? [] : searchResults}
            addToWishlist={addToWishlist}
            loading={loading}
          />
          {selectedParkId && (
            <FeaturePark
              selectedParkId={selectedParkId}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setSelectedParkId={setSelectedParkId}
            />
          )}
        </div>
        <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      </div>
    </div>
  );
};

export default App;
