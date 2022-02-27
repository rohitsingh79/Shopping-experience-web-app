import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./HomePage/Register";
import Login from "./HomePage/Login";
import ProductList from "./Products/ProductList";
import ProductDescription from "./Products/ProductDescription";
import ProductListContext from "./Products/ProductsListContext";
import Cart from '../src/Cart/Cart';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ProductListContext />} />
        <Route exact path="/cart" element={<Cart/>} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/product/:productId" element={<ProductDescription />} /> */}
      </Routes>
    </div>
  );
}
