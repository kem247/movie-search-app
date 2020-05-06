const axios = require("axios");

const SET_MOVIES = "SET_MOVIES";

// const ADD_CAMPUS = "ADD_CAMPUS";

// const REMOVE_CAMPUS = "REMOVE_CAMPUS";

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

// export const newCampus = campus => ({
//   type: ADD_CAMPUS,
//   campus
// });

// export const removeCampus = campusId => ({
//   type: REMOVE_CAMPUS,
//   campusId
// });
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://www.omdbapi.com/?s=man&apikey=4a3b711b"
      );
      dispatch(setMovies(data));
    } catch (err) {
      console.log("There's an error with fetchCampuses!");
    }
  };
};
// export const deleteCampus = (campusId) => {
//   return async (dispatch) => {
//     try {
//       const { data: campus } = await axios.delete(`/api/movies/${campusId}`);
//       dispatch(setCampuses(campus));
//     } catch (err) {
//       console.log("There's an error with deleteCampus!");
//     }
//   };
// };

// export const deleteCampuses = (campusId) => (dispatch) => {
//   try {
//     dispatch(deleteCampus(campusId));
//     dispatch(removeCampus(campusId));
//   } catch (err) {
//     console.log("There's an error with deleteCampuses");
//   }
// };
// export const submitCampuses = (campus) => async (dispatch) => {
//   try {
//     const response = await axios.post("/api/movies", campus);
//     dispatch(newCampus(response.data));
//   } catch (err) {
//     console.log("There's an error with submitCampuses!");
//   }
// };

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    // case ADD_CAMPUS:
    //   return [...state, action.campus];
    // case REMOVE_CAMPUS:
    //   return state.filter((campus) => campus.id !== action.campusId);
    default:
      return state;
  }
};

export default moviesReducer;
