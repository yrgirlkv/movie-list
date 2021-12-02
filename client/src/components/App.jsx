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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      movies: movies
    }
  }

  handleInput = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();

  }


  render () {
    return (
      <div id = "root">
        <h1>yr girl kv's list of movies</h1>
        <div>
          <SearchBar
            handleSearch = {this.handleSearch}
            handleInput = {this.handleInput}
          />
        </div>
        <div>
          <MovieList movies = {this.movies} />
        </div>
      </div>
    )
  }
}


export default App;