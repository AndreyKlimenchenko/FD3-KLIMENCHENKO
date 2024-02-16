import React from "react";
import PropTypes from "prop-types";

import "./Filter.css";

class Filter extends React.Component {
  static propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string)
  };
  state = {};

  render() {
    return <div className="filter-container">
      <div>{this.props.strings.map((item) => {
        return <div key={item}>{item}</div>
      })}</div>
    </div>;
  }
}

export default Filter;
