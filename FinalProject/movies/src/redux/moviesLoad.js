import { updateLoadState, updateData } from "./moviesSlice.js";

export async function moviesLoad(dispatch) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDQ3MGE4YzdjODNjNGJkNDE1OGIwN2JlNmRkZDM1YiIsInN1YiI6IjY2MTZiMTk2ODczZjAwMDE3ZDkxODIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rlxAFIcY4MtEtQiyI-EP3n4afcsawDQg6ZtLGUnN8JE",
        accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({ state: 2, error: null }));
      dispatch(updateData(data.results));
    } else {
      dispatch(
        updateLoadState({ state: 3, error: "HTTP error " + response.status })
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
}
