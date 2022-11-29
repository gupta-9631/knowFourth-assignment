import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="product_container">
      <div className="product_image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmqILatzvinLVcz1fD6KG1Z1CsCzKGsUYRA&usqp=CAU"
          alt=""
        />
      </div>
      <div>Product Name</div>
      <h2>Price</h2>
    </div>
  );
};

export default Product;
