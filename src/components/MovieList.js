import React from 'react';
import MovieDetailsModal from './MovieDetailsModal';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: null,
    };
  }

  movieSelectionHandler = (movieId) => {
    this.setState({selectedMovieId: movieId});
  };

  // TODO: Pagination
  render() {
    const { selectedMovieId } = this.state;
    const { searchResult: {results}, maxRows, itemsPerRow } = this.props;

    const movieDetailsById = results.reduce(
      (obj, movie) => {
        obj[movie.id] = movie;
        return obj;
      }, {});

    let rowCounter = 0;

    return (
      <div className="container-fluid movie-list">

        {new Array(maxRows).fill(null).map(row => rowCounter++).map(row => (
          <div className="row result-row" key={row}>
            {results.slice(row*itemsPerRow, (row*itemsPerRow)+itemsPerRow).map(movie => (
              <div className="col-2 result-item" key={movie.id}>
                <MovieListItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  popularity={movie.popularity}
                  poster_path={movie.poster_path}
                  handleClick={this.movieSelectionHandler} />
              </div>
            ))}
          </div>
        ))}

        {selectedMovieId && movieDetailsById.hasOwnProperty(selectedMovieId) &&
          <MovieDetailsModal movie={movieDetailsById[selectedMovieId]} />
        }
      </div>
    );
  }
}

export default MovieList;
