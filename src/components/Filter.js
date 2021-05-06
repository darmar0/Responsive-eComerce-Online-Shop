import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="sort">
        <select defaultValue="Sort by customer Review" onChange={(e) => props.filtering(e)}>
          <option>Sort by price: Low to High</option>
          <option>Sort by price: High to Low</option>
          <option>Sort by customer Review</option>
        </select>
        <div className="select-icon">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Filter;
