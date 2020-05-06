// import axios from "axios";

// const GET_SINGLE_MOVIE = "GET_SINGLE_MOVIE";

// const getSingleMovie = (singleMovie) => {
//   return {
//     type: GET_SINGLE_MOVIE,
//     singleMovie,
//   };
// };

// export const fetchSingleMovie = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(
//         `https://www.omdbapi.com/?i=${id}&apikey=385c8e5e`
//       );
//       dispatch(getSingleMovie(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// export default function singleMovieReducer(state = {}, action) {
//   switch (action.type) {
//     case GET_SINGLE_MOVIE:
//       return action.singleMovie;
//     default:
//       return state;
//   }
// }
export const singleMovieReducer = {
  loading: true,
  movies: {},
  errorMessages: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_SINGLE_MOVIE":
      return {
        ...state,
        loading: true,
        erroMessages: null,
      };
    case "GET_SINGLE_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "GET_SINGLE_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        erroMessages: action.error,
      };
    default:
      return state;
  }
};
