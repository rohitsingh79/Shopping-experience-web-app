import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  let productData = [];
  const [state, setState] = useState();

  // fetching the product data
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setState(data);
    // dispatch({ type: "FETCH_DATA", payload: data });
  };

  // if (selector.products) {
  //   productData = selector.products;
  // }

  useEffect(() => {
    fetchData();
    console.log("inside useEffect of ProductList");
  }, []);

  const renderProduct = state.map((item) => {
    return (
      // <Link to={`/product/${item.id}`}>
      <li>{item.id}</li>
      // </Link>
    );
  });

  return (
    <React.Fragment>
      inside product list
      {/* <ul>{renderProduct}</ul> */}
    </React.Fragment>
  );
}

export default ProductList;
