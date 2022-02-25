import { combineReducers } from "redux";
import {
  startLoadingReducer,
  createSignUpReducer,
  signInReducer,
  errorStateReducer,
  fetchAllProductReducer,
  fetchProductReducer
} from "./reducer";

const reducer = combineReducers({
  start: startLoadingReducer,
  create: createSignUpReducer,
  signIn: signInReducer,
  error: errorStateReducer,
  ProductList: fetchAllProductReducer,
  ProductDescription: fetchProductReducer
});

export default reducer;
