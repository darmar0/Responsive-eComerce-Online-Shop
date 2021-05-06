import React, { useState } from "react";
import Product from "./Product.js";
import Filter from "../components/Filter.js";
import { useSelector } from "react-redux";

const ProductsPage = (props) => {
  const [filter, setFilter] = useState();
  const category = props.category;
  const state = useSelector((state) => state);
  const filtering = (e) => {
    setFilter(e.target.value);
  };
  const sorting = (arr) => {
    if (filter === "Sort by price: Low to High") {
      return arr.sort((a, b) => a.productPrice - b.productPrice);
    } else if (filter === "Sort by price: High to Low") {
      return arr.sort((a, b) => b.productPrice - a.productPrice);
    } else if (filter === "Sort by customer Review") {
      return arr.sort((a, b) => b.rating - a.rating);
    } else return arr.sort((a, b) => b.rating - a.rating);
  };

  return (
    <div>
      <Filter filtering={filtering} />
      <div className="products">
        {category
          ? sorting(state.stockData)
              .filter((i) => i.category === category)
              .map((item) => <Product key={item.id} item={item} />)
          : sorting(state.stockData).map((item) => <Product key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default ProductsPage;
