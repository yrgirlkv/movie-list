import React from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import InputBar from './InputBar.jsx'

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
      movies: [],
      newMovie: '',
      searchField: '',
      displayedMovies: []
    }
  }

  handleSearchText = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    console.log(this.state.searchField)
    let searchInput = this.state.searchField.toLowerCase();
    this.setState({
      displayedMovies: this.state.movies.filter((entry) => {
        let searchEntry = entry.title.toLowerCase();
        return searchEntry.includes(searchInput);
      })
    })
    console.log(this.state.displayedMovies);
  }

  handleAddMovieText = (event) => {
    event.preventDefault();
    this.setState({
      newMovie: event.target.value
    });
  }

  handleAddMovie = (event) => {
    event.preventDefault();
    this.setState((state) => {
      let stash = state.movies;
      if (state.newMovie) {
        return {movies: [...stash, {title: state.newMovie}]}
      }
    })
    console.log('test');
    this.setState((state) => {
      return {displayedMovies: this.state.movies
      // .filter((entry) => {
      //   let searchEntry = entry.title.toLowerCase();
      //   return searchEntry.includes('');
      // })
    }})
  }

  render () {
    return (
      <div id = "root">
        <h1>yr girl kv's list of movies</h1>
        <div>
          <InputBar
            handleAddMovie = {this.handleAddMovie}
            handleAddMovieText = {this.handleAddMovieText}
          />
        </div>
        <div>
          <SearchBar
            handleSearch = {this.handleSearch}
            handleSearchText = {this.handleSearchText}
          />
        </div>
        <div>
          <MovieList movies = {this.state.displayedMovies.length !== 0 ? this.state.displayedMovies : [{title: 'No entries found'}]} />
        </div>
      </div>
    )
  }
}

export default App;