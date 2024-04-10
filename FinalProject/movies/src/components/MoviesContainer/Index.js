import { useEffect, useState } from "react";
import "./MoviesContainer.css";
import Header from "../Header/Index";

function MoviesContainer() {
  const [movies, setMovies] = useState([]);

  const handleGetMovies = async () => {
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

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, []);
  console.log(movies);
  return (
    <div className="container">
      <Header />
      {movies.map((element) => {
        return <div key={element.id}>{element.title}</div>;
      })}
    </div>
  );
}

export default MoviesContainer;
