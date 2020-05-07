import React, { useState, useReducer } from "react";
import { singleMovieReducer } from "../store/singleMovie";

const SingleMovie = ({ singleMovie }) => {
  const [toggled, toggle] = useState(false);

  return (
    <>
      <button
        id={SingleMovie.imdbID}
        onClick={() => toggle((toggled) => !toggled)}
      >
        More
      </button>
      <div>{toggled && <>{singleMovie.Plot}</>}</div>
    </>
  );
};

export default SingleMovie;
