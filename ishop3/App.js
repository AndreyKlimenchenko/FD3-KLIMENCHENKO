import React from "react";
import ReactDOM from "react-dom";

import ShopBlock from "./components/Shop";

import products from "./products.json";

let shopName = "Onliner";

ReactDOM.render(
  <ShopBlock name={shopName} items={products} />,
  document.getElementById("container")
);
