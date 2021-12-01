import React from 'react';

const MovieList = (props) => (
  props.movies.map( (movie, index) =>
    <div className="movie-entry" key = {index}>{movie.title}</div>
  )
);

export default MovieList;