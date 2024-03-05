import React from "react";
import PropTypes from "prop-types";

const Controls = ({
  isSorted,
  search,
  handleReset,
  handleCheckboxChange,
  handleChange,
}) => {
  return (
    <div className="select-container">
      <input
        type="checkbox"
        name="order"
        checked={isSorted}
        onChange={(event) => handleCheckboxChange(event.target.checked)}
      />
      <input
        onChange={(event) => handleChange(event.target.value)}
        value={search}
      />
      <button onClick={handleReset}>сброс</button>
    </div>
  );
};

Controls.propTypes = {
  isSorted: PropTypes.bool,
  search: PropTypes.string,
  handleReset: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Controls;
