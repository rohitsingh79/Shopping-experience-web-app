import React, { useEffect, useRef, useState } from "react";

import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { logInActionCreator } from "../Actions/LoginAction";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.signIn);
  const navigate = useNavigate();

  console.log("inside login functionality");
  console.log(currentUser);

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();
    let passwordValue = passwordRef.current.value;
    let emailValue = emailRef.current.value;
    dispatch({ type: "START_LOAD", payload: "" });
    dispatch(logInActionCreator(auth, emailValue, passwordValue));
  };

  return (
    <React.Fragment>
      <div>Log in form</div>
      <form onSubmit={(event) => submitHandler(event)}>
        <label>
          Enter your Email:
          <input type="email" ref={emailRef}></input>
        </label>
        <label>
          Enter your Password:
          <input type="text" ref={passwordRef}></input>
        </label>
        <button type="submit">Log in</button>
        <button type="submit">Registration</button>
      </form>
      {/* <div>{currentUser}</div> */}
    </React.Fragment>
  );
}
