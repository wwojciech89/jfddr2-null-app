import "./SearchBar.css";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="wyszukaj piwo..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
