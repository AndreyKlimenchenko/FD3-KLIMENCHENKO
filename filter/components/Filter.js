import React from "react";
import PropTypes from "prop-types";

import "./Filter.css";

class Filter extends React.Component {
  static propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string),
  };
  state = {};

  render() {
    return (
      <div className="filter-container">
        <div className="select-container">
          <input type="checkbox" name="order"/>
          <input/>
          <button>сброс</button>
        </div>
        <div className="strings-container">
          {this.props.strings.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Filter;
