import React from "react";
import PropTypes from "prop-types";

import "./Filter.css";

class Filter extends React.Component {
  static propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string),
  };

  state = {
    strings: this.props.strings,
  };

  handleChange = (value) => {
    const newStrings = value
      ? this.props.strings.filter((item) => {
          return item.includes(value);
        })
      : this.props.strings;

    this.setState({
      strings: newStrings,
    });
  };

  render() {
    return (
      <div className="filter-container">
        <div className="select-container">
          <input type="checkbox" name="order" />
          <input onChange={(event) => this.handleChange(event.target.value)} />
          <button>сброс</button>
        </div>
        <div className="strings-container">
          {this.state.strings.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Filter;
