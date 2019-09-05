import React from 'react';

function MovieListItem(props) {

  const { id, title, poster_path, handleClick } = props;

  // TODO: Get the base url from api endpoint /configuration
  const imgBaseUrl = "https://image.tmdb.org/t/p/";
  const imgSize = "w154";
  const fullImgUrl = imgBaseUrl + imgSize + poster_path;

  if (!poster_path) {
    return null;
  }

  return (
    <div className="movie-poster">
      <img src={fullImgUrl} alt={title} title={title} onClick={() => handleClick(id)} />
    </div>
  );
}

export default MovieListItem;
