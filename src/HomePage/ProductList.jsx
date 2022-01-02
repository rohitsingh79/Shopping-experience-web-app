import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [state, setState] = useState([]);
  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const productJsonData = await response.json();
    setState(productJsonData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const renderProduct = state.map((item) => {
    return (
      <Link to={`/product/${item.id}`}>
        <li>{item.id}</li>
      </Link>
    );
  });

  console.log(state);
  return (
    <React.Fragment>
      <ul>{renderProduct}</ul>
    </React.Fragment>
  );
}
