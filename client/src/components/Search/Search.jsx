import "./Search.css";
const Search = (props) => {
  return (
    <form className="search-form">
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        type="text"
        name="Search"
        placeholder="Search by Author"
        autoFocus
      />
    </form>
  );
};

export default Search;
