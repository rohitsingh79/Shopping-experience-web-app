import { combineReducers } from "redux";
import {
  startLoadingReducer,
  createSignUpReducer,
  endLoadingReducer,
  signInReducer,
  errorStateReducer,
  fetchAllProductReducer,
  fetchProductReducer
} from "./reducer";

const reducer = combineReducers({
  start: startLoadingReducer,
  create: createSignUpReducer,
  end: endLoadingReducer,
  signIn: signInReducer,
  error: errorStateReducer,
  ProductList: fetchAllProductReducer,
  ProductDescription: fetchProductReducer
});

export default reducer;
