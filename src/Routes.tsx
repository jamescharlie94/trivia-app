import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/qa" element={<h1>qa screen</h1>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
