import React from 'react';

const InputBar = (props) => {
  <form>
    <label>Add movie title here</label>
    <input
      type="text"
      placeholder="Add movie title here"
      onChange = {props.handleAddMovieInput}
    />
    <button type="submit">Add</button>
    <br />
    <br />
  </form>
}