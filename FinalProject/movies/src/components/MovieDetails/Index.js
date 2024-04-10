import { useParams } from "react-router";
import "./MovieDetails.css";
import { useSelector } from "react-redux";

function MovieDetails() {
  const params = useParams();

  const movie = useSelector((state) => {
    const data = state.movies.data.find((element) => element.id.toString() === params.id);
    return data
  });

  if (!movie) return null;
  return <div className="container">{movie.title}</div>;
}

export default MovieDetails;
