import React from "react";
import data from "../data.js";
import Related from "./Related.js";

const RelatedProducts = (props) => {
  const category = props.category;
  const id = props.id;
  return (
    <div className="relatedBox">
      <h4>Products related to this item</h4>
      <div className="productsRelated">
        {category
          ? data.stockData.filter((i) => i.category === category && i.id !== id).map((item) => <Related key={item.id} item={item} />)
          : data.stockData.map((item) => <Related key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default RelatedProducts;
