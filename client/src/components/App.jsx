import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'The Matrix'}
];

const MovieList = (props) => (
  props.movies.map((movie, index) =>
  <li key = {index}>{movie.title}</li>
  )
);

const App = (props) => (
  <div id = "root">
    <h1>yr girl kv's list of movies</h1>
    <div>
      <MovieList movies={movies} />
    </div>
  </div>
);

export default App;