import { useDispatch, useSelector } from "react-redux";
import "./MoviesContainer.css";
import { useNavigate } from "react-router";
import { Pagination } from "../../shared/pagination";
import { moviesLoad } from "../../redux/moviesLoad";
import spinner from "../../assets/spinner.svg"

function MoviesContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  const handleSetActivePage = (page) => {
    moviesLoad(dispatch, page)
  }

  return (
    <div className="container">
      {movies.dataLoad && <img src={spinner} alt="" className="spinner" />}
      <div className="movieContainer">
        {movies.data.map((element) => {
          return (
            <div
              className="movieCard"
              key={element.id}
              onClick={() => navigate(`/${element.id}`)}
            >
                <div className="moviePoster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${element.poster_path})`}}/>
              <div className="movieTitle"> {element.title}</div>
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
      <Pagination pages={movies.totalPages} active={movies.activePage} setActive={(page) => handleSetActivePage(page)} />
    </div>
  );
}

export default MoviesContainer;
