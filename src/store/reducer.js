export const initialState = {
  loading: true,
  movies: [],
  errorMessages: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        erroMessages: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURES":
      return {
        ...state,
        loading: false,
        erroMessages: action.error,
      };
    default:
      return state;
  }
};
