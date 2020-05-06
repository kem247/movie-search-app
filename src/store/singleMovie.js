export const initialStateMovie = {
  loadingSingle: true,
  moviesSingle: [],
  errorMessagesSingle: null,
};

export const singleMovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loadingSingle: true,
        erroMessagesSingle: null,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        loadingSingle: false,
        moviesSingle: action.payload,
      };

    case "GET_MOVIES_FAILURES":
      return {
        ...state,
        loading: false,
        erroMessagesSingle: action.error,
      };
    default:
      return state;
  }
};
