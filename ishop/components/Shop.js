﻿import React from "react";
import PropTypes from "prop-types";

import "./Shop.css";
import Product from "./Product";

class Shop extends React.Component {
  static propTypes = {
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
  
  render() {
    return (
      <div className="shop-container">
        <h1>{this.props.shopName}</h1>
        <table className="shop-table">
          <tbody>
            <tr>
              <th></th>
              <th>имя</th>
              <th>цена</th>
              <th>остаток</th>
            </tr>
            {
              this.props.products.map((item) => {
                return <Product product={item} key={item.id}/>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shop;
