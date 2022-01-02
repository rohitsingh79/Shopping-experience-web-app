import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Header from "./HomePage/Header";
import Register from "./HomePage/Register";
import Login from "./HomePage/Login";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
