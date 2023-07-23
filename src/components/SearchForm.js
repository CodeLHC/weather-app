import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    const input = event.target.value;

    const isValid = input === "" || /^[a-z -]*$/gi.test(input);
    if (isValid) setSearchText(input);
  };
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        onChange={handleInputChange}
        value={searchText}
        placeholder="Enter UK City for forecast!"
      />
      <button className="search-form__button" type="submit" onClick={onSubmit}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#2B2D42" }}
        />
      </button>
    </div>
  );
}

export default SearchForm;
