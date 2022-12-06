import React from "react";
import "./product.css";

const Product = (props) => {
  return (
    <div className="product_container">
      <div className="product_image">
        <img src={props.product.data.img} alt="" />
      </div>
      <div>{props.product.data.name}</div>
      <h2>{props.product.data.price}</h2>
    </div>
  );
};

export default Product;
