import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MoviesContainer.css";
import Header from "../Header/Index";
import { moviesLoad } from "../../redux/moviesLoad";

function MoviesContainer() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(moviesLoad);
  }, []);

  return (
    <div className="container">
      <Header />
      {movies.data.map((element) => {
        return <div key={element.id}>{element.title}</div>;
      })}
    </div>
  );
}

export default MoviesContainer;
