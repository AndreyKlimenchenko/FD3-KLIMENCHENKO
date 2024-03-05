import React from "react";
import PropTypes from "prop-types";

import RainbowFrame from "./RainbowFrame";

class RainbowBlock extends React.Component {
  static propTypes = {
    caption1: PropTypes.string,
    caption2: PropTypes.string,
    children: PropTypes.string,
    cbPressed: PropTypes.func,
  };

  render() {
    let colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "#00BFFF",
      "blue",
      "purple",
    ];
    return <RainbowFrame colors={colors}>
      <button onClick={() => this.props.cbPressed(1)}>{this.props.caption1}</button>
      {this.props.children}
      <button onClick={() => this.props.cbPressed(2)}>{this.props.caption2}</button>
    </RainbowFrame>;
  }
}

export default RainbowBlock;
