import React from "react";
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

  state = {
    selectedProductID: '',
    products: this.props.products,
  }

  handleSelect = (id) => {
    if (id === this.state.selectedProductID) {
      this.setState({selectedProductID: ''})
    } else {
      this.setState({selectedProductID: id})
    }
  };

  handleDelete = (id) => {
    const response = confirm("Уверены?");
    if (response) {
      this.setState({products: this.state.products.filter((item) => item.id !== id)})
    }
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
              <th></th>
            </tr>
            {this.state.products.map((item) => {
              const isSelected = this.state.selectedProductID === item.id;

              return (
                <Product
                  product={item}
                  key={item.id}
                  isSelected={isSelected}
                  handleSelect={this.handleSelect}
                  handleDelete={this.handleDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shop;
