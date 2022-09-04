import "./search-bar.style.css"

const SearchBar = ({ onChangeHandler, placeholder,classname })=>{

      return (
         <input
            type="search"
            className={`search-box ${classname}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
         />
      );
}

export default SearchBar