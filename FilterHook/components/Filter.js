import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Filter.css";
import Controls from "./Controls";
import List from "./List";

const Filter = ({ strings }) => {
  const [data, setData] = useState(strings);
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const handleChange = (value) => {
    setSearch(value);
    const newArray = strings.slice();
    const newStrings = value
      ? newArray.filter((item) => {
          return item.includes(value);
        })
      : strings;
    const sortedArray = newStrings.slice();
    setData(isSorted ? sortedArray.sort() : sortedArray);
  };

  const handleCheckboxChange = (value) => {
    const newArray = data.slice();
    const newStringsArray = strings.slice();
    const newStrings = value
      ? newArray.sort()
      : newStringsArray.filter((item) => {
          return item.includes(search);
        });
    setIsSorted(value);
    setData(newStrings);
  };

  const handleReset = () => {
    setData(strings);
    setSearch("");
    setIsSorted(false);
  };

  return (
    <div className="filter-container">
      <Controls
        isSorted={isSorted}
        search={search}
        handleReset={handleReset}
        handleCheckboxChange={handleCheckboxChange}
        handleChange={handleChange}
      />
      <List data={data} />
    </div>
  );
};

Filter.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
};

export default Filter;
