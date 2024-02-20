import React from "react";

import BR2JSX from "./Br2jsxComponent";

class Br2jsxBlock extends React.Component {
  render() {
    let text = "первый<br>второй<br/>третий<br />последний";
    return <BR2JSX text={text} />;
  }
}

export default Br2jsxBlock;
