import React from "react";
import { Route } from "react-router-dom";

function ProtectedRoute({
  component: Component,
  isProductId: isProductSelected,
  ...restProps
}) {
  if (isProductSelected) {
    return <Route {...restProps} render={(props) => <Component />} />;
  } else {
    redi;
  }
}

export default ProtectedRoute;
