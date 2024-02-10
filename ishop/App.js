import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from './components/Shop';

import products from './products.json';

ReactDOM.render(
  <ShopBlock 
    products={products}
  />
  , document.getElementById('container') 
);
