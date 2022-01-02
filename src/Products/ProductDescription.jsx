import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ProductDescription() {
  const { productId } = useParams();
  const Dispatch = useDispatch();
  const selector = useSelector((state) => state.product);

  const fetchProductDetailById = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ); // string literal
    const singleProduct = await response.json();
    console.log("single product");
    console.log(singleProduct);
    // Dispatch({ type: "FETCH_SINGLE_PRODUCT", payload: singleProduct });
  };

  useEffect(() => {
    console.log("product description page");
    if (productId && productId !== "") {
      fetchProductDetailById();
    }
  }, []);
  return <React.Fragment>hello</React.Fragment>;
}

export default ProductDescription;
