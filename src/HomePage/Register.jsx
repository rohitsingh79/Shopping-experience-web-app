import React, { useEffect } from "react";
import { useRef, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { signUpActionCreator } from "../Actions/SignUpAction";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.create.currentUser);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();
    let nameValue = nameRef.current.value;
    let passwordValue = passwordRef.current.value;
    let emailValue = emailRef.current.value;
    dispatch({ type: "START_LOAD", payload: "" });
    console.log("name value", nameValue);
    dispatch(signUpActionCreator(auth, emailValue, passwordValue, nameValue));
  };

  return (
    <React.Fragment>
      <form onSubmit={(event) => submitHandler(event)}>
        <label>
          Enter your name:
          <input type="text" ref={nameRef}></input>
        </label>
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
