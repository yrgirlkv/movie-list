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
      movies: movies,
      filteredMovies: movies
    }
  }

  handleInput = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    console.log(this.state.searchField)
    let searchInput = this.state.searchField.toLowerCase();
    this.setState({
      filteredMovies: this.state.movies.filter((entry) => {
        let searchEntry = entry.title.toLowerCase();
        return searchEntry.includes(searchInput);
      })
    })
    console.log(this.state.filteredMovies);
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
          <MovieList movies = {this.state.filteredMovies.length !== 0 ? this.state.filteredMovies : [{title: 'No entries found'}]} />
        </div>
      </div>
    )
  }
}

export default App;