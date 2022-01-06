import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Header from "./HomePage/Header";
import Register from "./HomePage/Register";
import Login from "./HomePage/Login";
import ProductList from "./Products/ProductList";
import ProductDescription from "./Products/ProductDescription";
import HomeCheck from "./HomeCheck";
import SecondHome from "./secondHome";

export default function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/product/:productId" element={<ProductDescription />} />

        {/* for testing the routes page
         <Route exact path="/" element={<HomeCheck />} />
        <Route exact path="/SecondHome" element={<SecondHome />} />
        <Route path="/products" element={<Home />} /> */}
      </Routes>
    </div>
  );
}
