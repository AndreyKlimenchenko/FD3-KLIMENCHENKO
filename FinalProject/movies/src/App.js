import "./App.css";
import MoviesContainer from "./components/MoviesContainer/Index";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router";
import MovieDetails from "./components/MovieDetails/Index";
import { useEffect } from "react";
import { moviesLoad } from "./redux/moviesLoad";
import Header from "./components/Header/Index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesLoad);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
