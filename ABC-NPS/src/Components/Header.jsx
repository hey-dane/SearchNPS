import React from "react";
import SearchComponent from "./SearchComponent";

const Header = ({ onSearch }) => {
  const handleSearch = (results) => {
    onSearch(results);
  };

  return (
    <header>
      <SearchComponent onSearch={handleSearch} />
    </header>
  );
};

export default Header;
