import React from 'react';

const SearchBar = (props) => (
  <form onSubmit = {props.handleSearch}>
    <label> Search list </label>
    <input
      type="text"
      placeholder="Search..."
      onChange = {props.handleInput} />
    <button type="submit">Search</button>
    <br />
    <br />
  </form>
)

export default SearchBar;