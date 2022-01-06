import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ProductDescription() {
  const { productId } = useParams();
  const Dispatch = useDispatch();
  const products = useSelector((state) => state.ProductDescription.products);

  const fetchProductDetailById = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ); // string literal
    const data = await response.json();
    Dispatch({ type: "FETCH_SINGLE_PRODUCT", payload: data });
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetailById();
    }
    return () => Dispatch({ type: "REMOVE_PRODUCT" });
  }, []);
  console.log("products", products);
  return <React.Fragment>{JSON.stringify(products)}</React.Fragment>;
}

export default ProductDescription;
