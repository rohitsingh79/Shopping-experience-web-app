import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [state, setState] = useState([]);

  const allProducts = useSelector((state) => state.ProductList.allProducts);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    console.log("data is", data);
    dispatch({ type: "FETCH_ALL_PRODUCTS", payload: data });
  };

  console.log("all products");
  console.log(allProducts);

  useEffect(() => {
    fetchData();
  }, []);

  const renderProduct = allProducts.map((item) => {
    return (
      <Link to={`/product/${item.id}`}>
        <li>{item.id}</li>
      </Link>
    );
  });

  return (
    <React.Fragment>
      <ul>{renderProduct}</ul>
    </React.Fragment>
  );
}
