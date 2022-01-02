import { combineReducers } from "redux";
import {
  startLoadingReducer,
  createSignUpReducer,
  endLoadingReducer,
  signInReducer,
  errorStateReducer
} from "./reducer";

const reducer = combineReducers({
  start: startLoadingReducer,
  create: createSignUpReducer,
  end: endLoadingReducer,
  signIn: signInReducer,
  error: errorStateReducer
});

export default reducer;
