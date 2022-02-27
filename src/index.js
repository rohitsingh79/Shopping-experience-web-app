import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import Context from '../src/Context/Context';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <Context>
      <Router>
        <App />
      </Router>
    </Context>
    {/* </Provider> */}
  </StrictMode>,
  rootElement
);
