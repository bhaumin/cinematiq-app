import React from 'react';
import MovieDetailsModal from './MovieDetailsModal';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: null,
      showModal: false,
    };
  }

  movieSelectionHandler = (movieId) => {
    this.setState({selectedMovieId: movieId, showModal: true});
  };

  closeModal = () => {
    this.setState({ showModal: false });
  }

  // TODO: Pagination
  render() {
    const { selectedMovieId, showModal } = this.state;
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
          <MovieDetailsModal
            movie={movieDetailsById[selectedMovieId]}
            show={showModal}
            onHide={this.closeModal} />
        }
      </div>
    );
  }
}

export default MovieList;
