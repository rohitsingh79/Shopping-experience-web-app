const initialState = {
  loading: true,
  currentUser: null,
  error: null
};

const productInitialState = {
  allProducts: []
};
const singleProductInitialState = {
  products: {}
};

export const startLoadingReducer = (state = initialState, action) => {
  if (action.type === "START_LOAD") {
    return { ...state, loading: true };
  }
  return state;
};

export const createSignUpReducer = (state = initialState, action) => {
  if (action.type === "CREATE_USER") {
    return { ...state, loading: false, currentUser: action.payload };
  }
  return state;
};

export const signInReducer = (state = initialState, action) => {
  if (action.type === "SIGNUP_USER") {
    return { ...state, loading: false, currentUser: action.payload };
  }
  return state;
};

export const errorStateReducer = (state = initialState, action) => {
  if (action.type === "ERROR_STATE") {
    return { ...state, loading: false, error: action.payload };
  }
  return state;
};

export const fetchAllProductReducer = (state = productInitialState, action) => {
  if (action.type === "FETCH_ALL_PRODUCTS") {
    return { ...state, allProducts: action.payload };
  } else return state;
};
export const fetchProductReducer = (
  state = singleProductInitialState,
  action
) => {
  if (action.type === "FETCH_SINGLE_PRODUCT") {
    return { ...state, products: action.payload };
  }
  if (action.type === "REMOVE_PRODUCT") {
    return { ...state, products: {} };
  } else return state;
};
