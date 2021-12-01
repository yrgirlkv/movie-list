import React from 'react';

const MovieList = (props) => (
  props.movies.map((movie, index) =>
  <li key = {index}>{movie.title}</li>
  )
);

export default MovieList