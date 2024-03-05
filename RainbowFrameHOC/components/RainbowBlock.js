import React from "react";
import PropTypes from "prop-types";

import { withRainbowFrame } from "./withRainbowFrame";
import DoubleButton from "./DoubleButton";

class RainbowBlock extends React.Component {
  static propTypes = {
    caption1: PropTypes.string,
    caption2: PropTypes.string,
    children: PropTypes.string,
    cbPressed: PropTypes.func,
  };

  render() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "#00BFFF",
      "blue",
      "purple",
    ];

    const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

    return (
      <div>
        <DoubleButton
          caption1={this.props.caption1}
          caption2={this.props.caption2}
          cbPressed={(num) => alert(num)}
        >
          вышел, был сильный
        </DoubleButton>
        <br />
        <FramedDoubleButton
          caption1="я из лесу"
          caption2="мороз"
          cbPressed={(num) => alert(num)}
        >
          вышел, был сильный
        </FramedDoubleButton>
      </div>
    );
  }
}

export default RainbowBlock;
