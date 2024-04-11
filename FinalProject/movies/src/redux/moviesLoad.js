import { updateLoadState, updateData } from "./moviesSlice.js";

export async function moviesLoad(dispatch, page = 1) {
  try {
    dispatch(updateLoadState({ dataLoad: true }));
    const url =
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
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
      dispatch(updateLoadState({ dataLoad: false }));
      dispatch(updateData(data));
    } else {
      dispatch(
        updateLoadState({ dataLoad: false })
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ dataLoad: false }));
  }
}
