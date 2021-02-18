import SearchBar from "./SearchBar";

const Header = ({ setSearch }) => {
  return (
    <div className="Header">
      <h1>PIWKO</h1>
      <SearchBar setSearch={setSearch} />
    </div>
  );
};

export default Header;
