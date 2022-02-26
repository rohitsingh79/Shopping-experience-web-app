import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./HomePage/Register";
import Login from "./HomePage/Login";
import ProductList from "./Products/ProductList";
import ProductDescription from "./Products/ProductDescription";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/product/:productId" element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
