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

  const handleSearch = (results) => {
    setLoading(true); // Set loading to true when search is initiated

    setTimeout(() => {
      setSearchResults(results);
      setLoading(false);
    }, 2000); // Simulated loading delay of 4.5 seconds
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

  useEffect(() => {
    if (!loading) {
      // Perform actions after loading is complete
      // Example: Update the PreviewList with search results
      // You can modify this part according to your requirements
      // For now, it simply logs the search results
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
            updateSelectedParkId={setSelectedParkId}
            searchResults={loading ? [] : searchResults} // Display empty results while loading
            addToWishlist={addToWishlist}
            loading={loading} // Pass the loading state to PreviewList
          />
          {selectedParkId && <FeaturePark selectedParkId={selectedParkId} />}
        </div>
        <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      </div>
    </div>
  );
};

export default App;
