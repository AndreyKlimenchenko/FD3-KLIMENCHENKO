import React from "react";
import PropTypes from "prop-types";

import "./Br2jsxComponent.css";

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    let strArr = this.props.text.split(/(?:<br>|<br\/>|<br\s+\/>)+/);

    let arr = [];

    for (let i = 0; i <= strArr.length - 1; i++) {
      if (i == strArr.length - 1) {
        arr.push(strArr[i]);
      } else {
        let e = <br key={i} />;
        arr.push(strArr[i], e);
      }
    }

    return <div className="container">{arr}</div>;
  }
}

export default BR2JSX;
