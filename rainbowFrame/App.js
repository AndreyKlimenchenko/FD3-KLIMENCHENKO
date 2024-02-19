import React from 'react';
import ReactDOM from 'react-dom';

import RainbowBlock from './components/Rainbow';

ReactDOM.render(
  <RainbowBlock 
    products={products}
    shopName="каталог объективов"
  />
  , document.getElementById('container') 
);
