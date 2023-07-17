import SearchComponent from "./SearchComponent";

const Header = ({ onSearch }) => {
  return (
    <header className="header-container">
      <div className="searchbar">
        <SearchComponent onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
