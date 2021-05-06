import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";
import Ratings from "../components/Ratings.js";
import Comments from "../components/Comments.js";
import RelatedProducts from "../components/RelatedProducts.js";
import Quantity from "../components/Quantity.js";
import * as actionCreators from "../redux/actionCreators.js";
import { useSelector, useDispatch } from "react-redux";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const id = useParams().id;
  const product = state.stockData.find((i) => parseInt(i.id) === parseInt(id));
  const stock = product.productQuantity > 0 ? "In stock" : "Out of stock";
  const [qty, setQty] = useState({ value: 1, click: 0 });
  const [imgLarge, setImg] = useState(product.productImage[1]);

  return (
    <div className="product-page">
      <div className="productBox">
        <div className="imageBox">
          <div className="imgSelect">
            <a>
              <img
                alt={product.productName}
                className={imgLarge === product.productImage[1] ? "productImageSmallShadow" : "productImageSmall"}
                src={product.productImage[1]}
                onClick={(e) => setImg(e.target.src)}
              ></img>
            </a>
            {product.productImage[2] ? (
              <a>
                <img
                  alt={product.productName}
                  className={imgLarge === product.productImage[2] ? "productImageSmallShadow" : "productImageSmall"}
                  src={product.productImage[2]}
                  onClick={(e) => setImg(e.target.src)}
                ></img>
              </a>
            ) : null}
          </div>

          <img alt={product.productName} className="productImageLarge" src={imgLarge}></img>
        </div>
        <div className="descriptionBox">
          <h2>{product.productName}</h2>
          <Ratings rating={product.rating} reviews={product.reviews} />
          <p>{product.productDescription}</p>
          <hr className="separatorH"></hr>
          <h4>About this item</h4>
          <ul>
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </li>
            <li>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </li>
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </li>
          </ul>
        </div>

        <div className="shopBox">
          <div className="shopBoxHeader">
            <h1 className="price">{"$" + product.productPrice}</h1>

            <p style={{ color: "#008900", fontWeight: 600 }}>{stock}</p>
          </div>

          <div className="cartBox">
            <Quantity setQty={setQty} qty={qty.value} product={product} id={id} />
            <div className="btn">
              <button
                className="cartButton"
                onClick={() => dispatch(actionCreators.ADD_TO_CART({ ...product, productQuantity: qty.value }))}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to chart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comments product={product} user={props.user} />
      <RelatedProducts category={product.category} id={product.id} />
    </div>
  );
};
export default ProductPage;
