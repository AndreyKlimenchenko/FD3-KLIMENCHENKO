import { useSelector } from "react-redux";
import "./MoviesContainer.css";
import Header from "../Header/Index";
import { useNavigate } from "react-router";

function MoviesContainer() {
  const navigate = useNavigate();

  const movies = useSelector((state) => state.movies);



  return (
    <div className="container">
      <Header />
      {movies.data.map((element) => {
        return <div key={element.id} onClick={() => navigate(`/${element.id}`)}>{element.title}</div>;
      })}
    </div>
  );
}

export default MoviesContainer;
