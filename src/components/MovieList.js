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
    const { results } = this.props.searchResult;

    const movieDetailsById = results.reduce(
      (obj, movie) => {
        obj[movie.id] = movie;
        return obj;
      }, {});

    return (
      <div className="container-fluid movie-list">

        {[0,1,2,3].map(row => (
          <div className="row result-row" key={row}>
            {results.slice(row*5, (row*5)+5).map(movie => (
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
