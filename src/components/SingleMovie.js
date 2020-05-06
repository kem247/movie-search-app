import React, { useState, useReducer } from "react";
import { singleMovieReducer } from "../store/singleMovie";

// import axios from "axios";
// import spinner from "../assets/ajax-loader.gif";
// import { initialState, reducer } from "../store/reducer";

const SingleMovie = ({ singleMovie }) => {
  const [toggled, toggle] = useState(false);
  // const [idValue, setValue] = useState("");

  // const getValue = (e) => {
  //   e.preventDefault();
  //   singleMovie(idValue);
  // };
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
