import React from "react";
import Ratings from "./Ratings.js";

const Related = (props) => {
  const productLink = props.item.productName.replace(/\s/g, "_");

  return (
    <a id="related" href={`/product/${productLink}/${props.item.id}`}>
      <div id={props.item.id} className="productRelated">
        <img alt={props.item.productName} className="productImageRelated" src={props.item.productImage[1]}></img>
        <div className="productNameRelated">{props.item.productName}</div>

        <div className="productPriceRelated">€ {props.item.productPrice}</div>
      </div>
      <Ratings rating={props.item.rating} reviews={props.item.reviews} />
    </a>
  );
};

export default Related;
