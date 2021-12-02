import React from 'react';

const InputBar = (props) => {
  return (
    <form onSubmit = {props.handleAddMovie}>
      <label> Add movie title here </label>
      <input
        type="text"
        placeholder="Add movie title here"
        onChange = {props.handleAddMovieText}
      />
      <button type="submit">Add</button>
      <br />
      <br />
    </form>
  )
}

export default InputBar