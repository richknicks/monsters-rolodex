import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    name="name"
    autoComplete="false"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
