import React, { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import { apiKey } from "./apiConfig";
import "./header.css";

const Header = ({ onSearch, park }) => {
  const handleSearch = (results) => {
    onSearch(results);
  };

  return (
    <header className="header-container">
      <SearchComponent onSearch={handleSearch} />
    </header>
  );
};

export default Header;
