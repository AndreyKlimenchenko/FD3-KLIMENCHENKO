import React from "react";
import PropTypes from "prop-types";

import "./Filter.css";

class Filter extends React.Component {
  static propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string),
  };

  state = {
    strings: this.props.strings,
    search: "",
  };

  handleChange = (value) => {
    this.setState({ search: value });
    const newArray = this.props.strings.slice();
    const newStrings = value
      ? newArray.filter((item) => {
          return item.includes(value);
        })
      : this.props.strings;

    this.setState({
      strings: newStrings,
    });
  };

  handleCheckboxChange = (value) => {
    const newArray = this.state.strings.slice();
    const newStrings = value
      ? newArray.sort()
      : this.props.strings.filter((item) => {
          return item.includes(this.state.search);
        });
    this.setState({
      strings: newStrings,
    });
  };

  render() {
    return (
      <div className="filter-container">
        <div className="select-container">
          <input
            type="checkbox"
            name="order"
            onChange={(event) =>
              this.handleCheckboxChange(event.target.checked)
            }
          />
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
