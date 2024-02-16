import React from "react";
import PropTypes from "prop-types";

import "./Product.css";

class Product extends React.Component {

  static propTypes = {
    isSelected: PropTypes.bool,
    handleSelect: PropTypes.func,
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      count: PropTypes.number,
      url: PropTypes.string,
      price: PropTypes.number,
    }),
  };

  render() {
    return (
      <tr className={this.props.isSelected ? "tableRowActive" : "tableRow"} onClick={() => this.props.handleSelect(this.props.product.id)}>
        <td><img src={this.props.product.url} alt={this.props.product.title} width={60}/></td>
        <td className="table-cell">{this.props.product.title}</td>
        <td className="table-cell">{this.props.product.price}</td>
        <td className="table-cell">{this.props.product.count}</td>
      </tr>
    );
  }
}

export default Product;
