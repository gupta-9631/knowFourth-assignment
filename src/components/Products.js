import React from "react";
import Product from "./Product";
import "./products.css";

const Products = () => {
  return (
    <div className="products_container">
      <div className="left_Menu">
        <input className="search" type="text" placeholder="search here.." />
        <h1>Categories</h1>
        <div className="cats">
          <span className="cat">All</span>
          <span className="cat">Pesticides</span>
          <span className="cat">Herbicides</span>
          <span className="cat">Seeds</span>
          <span className="cat">Fertilizers</span>
        </div>
      </div>
      <div className="contents">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
