import { useParams } from "react-router";
import "./MovieDetails.css";
import { useSelector } from "react-redux";

function MovieDetails() {
  const params = useParams();

  const movie = useSelector((state) => {
    const data = state.movies.data.find(
      (element) => element.id.toString() === params.id
    );
    return data;
  });
  console.log(movie);
  if (!movie) return null;
  return (
    <div className="container">
      <div className="titleDateContainer">
        <span className="movieTitle"> {movie.title}</span>
        <span className="movieDescription"> {movie.release_date}</span>
      </div>
      <div
        className="moviePoster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        }}
      />
      <div className="movieDescription">{movie.overview}</div>
    </div>
  );
}

export default MovieDetails;
