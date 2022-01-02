import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  let productData = [];

  // fetching the product data
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch({ type: "FETCH_DATA", payload: data });
  };

  if (selector.products) {
    productData = selector.products;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {productData.map((product) => {
        return <li>{product.title}</li>;
      })}
    </React.Fragment>
  );
}

export default ProductList;
