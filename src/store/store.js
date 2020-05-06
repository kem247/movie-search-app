import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import { createStore, applyMiddleware, combineReducers } from "redux";

import thunkMiddleware from "redux-thunk";
import moviesReducer from "./movies";
import singleMovieReducer from "./singleMovie";

const reducer = combineReducers({
  movies: moviesReducer,
  singleMovie: singleMovieReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./movies";
export * from "./singleMovie";
