import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Shop.css";
import Product from "./Product";

const Shop = (props) => {
  const [selectedProductID, setSelectedProductID] = useState('');

  const handleSelect = (id) => {
    if (id === selectedProductID) {
      setSelectedProductID('');
    } else {
      setSelectedProductID(id)
    }
  };

  return (
    <div className="shop-container">
      <h1>{props.shopName}</h1>
      <table className="shop-table">
        <tbody>
          <tr>
            <th></th>
            <th>имя</th>
            <th>цена</th>
            <th>остаток</th>
          </tr>
          {props.products.map((item) => {

            const isSelected = selectedProductID === item.id;

            return <Product product={item} key={item.id} isSelected={isSelected} handleSelect={handleSelect}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

Shop.propTypes = {
  shopName: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      count: PropTypes.number,
      url: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default Shop;
