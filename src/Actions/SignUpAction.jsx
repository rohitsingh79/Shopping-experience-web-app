import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUpActionCreator = (auth, email, password, displayName) => {
  return async function (dispatch) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      userCredentials.user.displayName = displayName;

      dispatch({
        type: "CREATE_USER",
        payload: userCredentials.user.displayName
      });
    } catch (err) {
      console.log("error is");
      console.log(err);
      dispatch({ type: "ERROR_STATE", payload: err });
    }
  };
};
