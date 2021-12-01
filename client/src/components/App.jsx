import React from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'The Matrix'}
];

const App = (props) => (
  <div id = "root">
    <h1>yr girl kv's list of movies</h1>
    <div>
      <SearchBar />
    </div>
    <div>
      <MovieList movies = {movies} />
    </div>
  </div>
);

export default App;