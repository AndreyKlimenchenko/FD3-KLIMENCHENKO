import React from "react";
import PropTypes from "prop-types";

const List = ({ data }) => {
  return (
    <div className="strings-container">
      {data.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default List;
