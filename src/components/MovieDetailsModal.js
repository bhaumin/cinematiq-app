import React from 'react';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

function MovieDetailsModal(props) {
  const { movie } = props;

  const releaseDate = moment(movie.release_date, "YYYY-MM-DD").format("MMMM D, YYYY");

  const imgBaseUrl = "https://image.tmdb.org/t/p/";
  const imgSize = "w342";
  const fullImgUrl = imgBaseUrl + imgSize + movie.poster_path;

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <img src={fullImgUrl} alt={movie.title} />
            </div>
            <div className="col-8">
              <h4>{movie.title}</h4>
              <small>Released {releaseDate}</small>
              <br /><br />
              <p>{movie.overview}</p>
              <small><strong>Popularity: {movie.popularity.toFixed(0)}%</strong></small>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieDetailsModal;
