import React, { useReducer, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import spinner from "./assets/ajax-loader.gif";
import SingleMovie from "./components/SingleMovie";
import { initialState, reducer } from "./store/reducer.js";
import { initialStateMovie, singleMovieReducer } from "./store/singleMovie";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=385c8e5e";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggled, toggle] = useState(false);
  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search,
      });
    });
  }, []);

  // you can add this to the onClick listener of the Header component
  const refreshPage = () => {
    window.location.reload();
  };
  const getMovie = (id) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=385c8e5e`)
      .then((jsonResponse) => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_REQUEST",
            payload: alert(jsonResponse.data.Plot),
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search,
          });
        }
      });
  };

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      (jsonResponse) => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error,
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <div className="movie-title" key={`${index}-${movie.Title}`}>
          <Movie
            id="movie-index"
            key={`${index}-${movie.Title}`}
            movie={movie}
          />
          <>
            <button id="button-more" onClick={() => getMovie(movie.imdbID)}>
              More
            </button>
          </>
        </div>
      ))
    );

  return (
    <div className="App">
      <div className="m-container">
        <Header text="Movie Search" onClick={refreshPage} />

        <Search search={search} />

        <p className="App-intro">Search through some good films</p>

        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default withRouter(App);
