import React from "react";
import ReactDOM from "react-dom";

import Filter from "./components/Filter";

const strings = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];

ReactDOM.render(<Filter strings={strings} />, document.getElementById("container"));
