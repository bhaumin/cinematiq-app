import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import ajax from './ajax';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearchTerm: "",
      movieSearchResult: {},
    };
  }

  searchMovies = async (searchTerm) => {
    let movieSearchResult = {};
    if (searchTerm) {
      movieSearchResult = await ajax.fetchMovieSearchResults(searchTerm);
    }
    this.setState({ movieSearchResult, activeSearchTerm: searchTerm });
  };

  render() {
    const { activeSearchTerm, movieSearchResult } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <br />
          <h2>Cinematiq</h2>
          <br/>
          <div className="row">
            <div className="offset-2 col-8">
              <SearchBar initialSearchTerm={activeSearchTerm} searchMovies={this.searchMovies} />
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-12">
              {movieSearchResult && movieSearchResult.hasOwnProperty("results") &&
                <MovieList searchResult={movieSearchResult} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
