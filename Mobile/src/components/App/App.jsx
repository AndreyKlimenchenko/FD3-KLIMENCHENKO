import MobileCompany from "../MobileCompany/MobileCompany.jsx";
import clientsReducer from "../redux/clientsReducer.js";

import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(clientsReducer);

function App() {
  console.log("render App Component");
  return (
    <Provider store={store}>
      <MobileCompany />
    </Provider>
  );
}

export default App;
