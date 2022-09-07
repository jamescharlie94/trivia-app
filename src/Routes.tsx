import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<h1>home screen</h1>} />
        <Route path="/qa" element={<h1>qa screen</h1>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
