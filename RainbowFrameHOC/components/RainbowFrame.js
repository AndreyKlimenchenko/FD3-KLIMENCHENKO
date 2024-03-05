import React from "react";
import PropTypes from "prop-types";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    let item = this.props.children;
    this.props.colors.forEach((color) => {
      item = (
        <div
          style={{
            border: "solid 7px " + color,
            padding: "7px",
            textAlign: "center",
          }}
        >
          {item}
        </div>
      );
    });
    return item;
  }
}

export default RainbowFrame;
