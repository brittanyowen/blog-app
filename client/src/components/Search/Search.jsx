const Search = (props) => {
  return (
    <form>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        type="text"
        name="Search"
        placeholder="Search"
        autoFocus
      />
    </form>
  );
};

export default Search;
