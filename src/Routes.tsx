import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import LoadingSpinner from "./components/LoadingSpinner";

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/home" element={<Home />} />
          <Route path="/qa" element={<Quiz />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
