import React from "react";
import Ratings from "../components/Ratings.js";

const Product = ({ item }) => {
  const productLink = item.productName.replace(/\s/g, "_");

  return (
    <a href={`/product/${productLink}/${item.id}`}>
      <div id={item.id} className="product">
        <img alt={item.productName} className="productImage" src={item.productImage[1]}></img>
        <div className="productName">{item.productName}</div>
        <div className="productDescription">{item.productDescription}</div>
        <div className="productPrice">€ {item.productPrice}</div>
      </div>
      <Ratings rating={item.rating} reviews={item.reviews} />
    </a>
  );
};

export default Product;
