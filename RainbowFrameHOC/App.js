import React from "react";
import ReactDOM from "react-dom";

import RainbowBlock from "./components/RainbowBlock";

ReactDOM.render(<RainbowBlock caption1="однажды" caption2="пору" cbPressed={(value) => alert(value)}>в студеную зимнюю пору</RainbowBlock>, document.getElementById("container"));
