import React from 'react';
import MovieList from './MovieList.jsx'

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => (

  <div id = "root">
    <h1>yr girl kv's list of movies</h1>
    <div>
      <MovieList movies={movies} />
    </div>
  </div>
);

export default App;