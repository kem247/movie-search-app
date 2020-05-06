import React from "react";

const DEFAULT_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_IMAGE : movie.Poster;
  // console.log(movie.imdbID);
  // const url = `movie/${movie.imdbID}`;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>

      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
