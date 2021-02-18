const SearchBar = ({ setSearch }) => {
  return (
    <div>
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
