import React from 'react';

const MovieList = (props) => (
  props.movies.map( (movie) =>
    <div className="movie-entry" key = {movie.title}>
      {movie.title}      <button>Watched</button>
    </div>
  )
);

export default MovieList;