import "./App.css";
import MoviesContainer from "./components/MoviesContainer/Index";
import { Provider } from "react-redux";

import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MoviesContainer />
      </div>
    </Provider>
  );
}

export default App;
