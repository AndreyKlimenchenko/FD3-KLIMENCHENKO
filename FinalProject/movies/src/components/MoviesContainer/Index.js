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
      <div className="movieContainer">
        {movies.data.map((element) => {
          console.log(element);
          return (
            <div
              className="movieCard"
              key={element.id}
              onClick={() => navigate(`/${element.id}`)}
            >
                <div className="moviePoster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${element.poster_path})`}}/>
              <div className="movieTitle"> {element.title}</div>

              {/* <img
                src={`https://image.tmdb.org/t/p/original${element.poster_path}`}
                width="40px"
              /> */}
              <div>
                lang:  
                <span className="movieInfo">{element.original_language}</span>
              </div>
              <div>
                rating:  
                <span className="movieInfo">
                  {element.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesContainer;
