import React from "react";
import PropTypes from "prop-types";

import "./IshopChange.css";

class IshopChange extends React.Component {
  static displayName = "IshopChange";

  static propTypes = {
    item: PropTypes.object.isRequired,
    mode: PropTypes.number.isRequired,
    add: PropTypes.bool.isRequired,
    cbChanged: PropTypes.func.isRequired,
    cbCanceled: PropTypes.func.isRequired,
    cbOnChange: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.item.name,
    price: this.props.item.price,
    url: this.props.item.url,
    quantity: this.props.item.inStock,
    nameError: this.props.add,
    priceError: this.props.add,
    urlError: this.props.add,
    quantityError: this.props.add,
  };

  inputChanged = (e) => {
    this.props.cbOnChange();
    if (e.target.value == "") {
      this.validFunc(e, true);
    } else {
      this.validFunc(e, false);
    }
  };

  validFunc = (e, error) => {
    switch (e.target.name) {
      case "itemName":
        this.setState({ name: e.target.value, nameError: error });
        break;
      case "itemPrice":
        this.setState({ price: e.target.value, priceError: error });
        break;
      case "itemURL":
        this.setState({ url: e.target.value, urlError: error });
        break;
      case "itemQuantity":
        this.setState({ quantity: e.target.value, quantityError: error });
        break;
    }
  };

  changeItems = (e) => {
    if (e.target.value == "Save") {
      this.props.cbChanged({
        ...this.props.item,
        name: this.state.name,
        price: this.state.price,
        url: this.state.url,
        inStock: this.state.quantity,
      });
    } else {
      this.props.cbChanged({
        ...this.props.item,
        code: this.props.item.code,
        name: this.state.name,
        price: this.state.price,
        url: this.state.url,
        inStock: this.state.quantity,
      });
    }
  };

  render() {
    return (
      <div className="itemChange" hidden={this.props.mode !== 2}>
        <h3>{this.props.add ? "Add new product" : "Edit Existing Product"}</h3>

        <span>ID: {this.props.item.code}</span>
        <label className="inputArea">
          <span className="fieldName">Name</span>
          <input
            type="text"
            name="itemName"
            onChange={this.inputChanged}
            defaultValue={this.state.name}
          />
          <span className="error" hidden={!this.state.nameError}>
            Please, fill the field. Value must be a string.
          </span>
        </label>
        <label className="inputArea">
          <span className="fieldName">Price</span>
          <input
            type="text"
            name="itemPrice"
            onChange={this.inputChanged}
            defaultValue={this.state.price}
          />
          <span className="error" hidden={!this.state.priceError}>
            Please, fill the field. Value must be a rational number greater than
            0.
          </span>
        </label>
        <label className="inputArea">
          <span className="fieldName">URL</span>
          <input
            type="text"
            name="itemURL"
            onChange={this.inputChanged}
            defaultValue={this.state.url}
          />
          <span className="error" hidden={!this.state.urlError}>
            Please, fill the field. Value must be a valid URL.
          </span>
        </label>
        <label className="inputArea">
          <span className="fieldName">Quantity</span>
          <input
            type="text"
            name="itemQuantity"
            onChange={this.inputChanged}
            defaultValue={this.state.quantity}
          />
          <span className="error" hidden={!this.state.quantityError}>
            Please, fill the field. Value must be a positive integer.
          </span>
        </label>
        <input
          type="button"
          value={this.props.add ? "Add" : "Save"}
          onClick={this.changeItems}
          disabled={
            this.state.nameError ||
            this.state.priceError ||
            this.state.urlError ||
            this.state.quantityError
          }
        />
        <input type="button" value="Cancel" onClick={this.props.cbCanceled} />
      </div>
    );
  }
}

export default IshopChange;
