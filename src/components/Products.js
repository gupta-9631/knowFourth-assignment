import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [products]);
  // getting data from firestore database
  const getData = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((res) => {
        const product = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProducts(product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
