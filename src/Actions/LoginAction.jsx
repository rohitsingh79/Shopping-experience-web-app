import { signInWithEmailAndPassword } from "firebase/auth";

export const logInActionCreator = (auth, email, password) => {
  return async function (dispatch) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "SIGNUP_USER", payload: user });
    } catch (error) {
      dispatch({ type: "ERROR_STATE", payload: error });
    }
  };
};
